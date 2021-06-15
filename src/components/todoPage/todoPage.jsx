import React, { Component } from 'react';
import AppHeader from '../appHeader/appHeader';
import AppList from '../appList/appList';
import AppAddTodo from '../appAddTodo/appAddTodo';
import { Link } from 'react-router-dom';
import GetSendData from '../../service/getSendData';

import './todo.css';

class TodoPage extends Component {
  state = {
    //   todos: [
    //     { id: 1, isDone: false, isFavourite: false, title: 'Buy Milk', isEditOn: false },

    //     { id: 2, isDone: true, isFavourite: false, title: 'Buy Tv', isEditOn: false },

    //     { id: 3, isDone: false, isFavourite: false, title: 'Go to Park', isEditOn: false },

    //     { id: 4, isDone: false, isFavourite: false, title: 'Learn React', isEditOn: false },
    //   ],
    todos: [],
    isWarning: false,
  };

  componentDidMount() {
    this.getAllTodos();
  }

  checkToggle = (id, doneStatus) => {
    GetSendData.checkTodo(id, doneStatus, () => {
      this.getAllTodos();
    });
  };

  checkFavToggle = (id, favStatus) => {
    GetSendData.checkFavTodo(id, favStatus, () => {
      this.getAllTodos();
    });
  };

  handleDelete = (id) => {
    GetSendData.deleteTodo(id, (result) => {
      this.getAllTodos();
    });
  };

  getAllTodos = () => {
    GetSendData.getAllTodos((result) => {
      this.setState({ todos: result.sort((a, b) => a.isDone - b.isDone) });
    });
  };

  handleAddTodo = (todoTitle) => {
    if (todoTitle === '') {
      const warning = !this.state.isWarning;
      this.setState({ isWarning: warning });
      return;
    }
    GetSendData.addNewTodo(todoTitle, () => {
      this.getAllTodos();
      this.setState({ todoTitle: '' });
    });
  };

  toggleEdit = (id, newTitle) => {
    if (newTitle === '') {
      const warning = !this.state.isWarning;
      this.setState({ isWarning: warning });
      return;
    }
    const todos = [...this.state.todos];
    const found = todos.find((t) => t._id === id);
    if (found.isEditOn) found.title = newTitle;
    found.isEditOn = !found.isEditOn;
    //todos apacioje yra todos: todos
    this.setState({ todos });
  };

  showWarning = () => {
    return this.state.isWarning ? 'warning-message warning-db' : 'warning-message';
  };

  render() {
    return (
      <div className='todo-page'>
        <AppHeader />
        <AppList
          todos={this.state.todos}
          onToggle={this.checkToggle}
          onFavToggle={this.checkFavToggle}
          onDelete={this.handleDelete}
          onToggleEdit={this.toggleEdit}
        />
        <AppAddTodo key={this.state.todos._id} onClickAddTodo={this.handleAddTodo} />
        <Link to='/about'>Go to About us page</Link>
        <div className={this.showWarning()}>
          <h4>Please enter some text into your todo! </h4>
        </div>
      </div>
    );
  }
}

export default TodoPage;
