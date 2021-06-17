import React, { Component } from 'react';
import AppHeader from '../../components/appHeader/appHeader';
import AppList from '../../components/todoComponents/appList/appList';
import AppAddTodo from '../../components/todoComponents/appAddTodo/appAddTodo';
// import { Link } from 'react-router-dom';
import GetSendData from '../../service/getSendData';

import './todo.css';

class TodoPage extends Component {
  state = {
    todos: [],
    isWarning: false,
    errors: {
      addTodo: '',
    },
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
    GetSendData.deleteTodo(id, () => {
      this.getAllTodos();
    });
  };

  getAllTodos = () => {
    GetSendData.getAllTodos((result) => {
      this.setState({ todos: result.sort((a, b) => a.isDone - b.isDone) });
    });
  };

  handleAddTodo = (todoTitle) => {
    // this.toggleWarning(todoTitle);
    GetSendData.addNewTodo(todoTitle, (result) => {
      if (!result.success) {
        console.log('klaida fronte');
        this.setState({ errors: { addTodo: 'Field cannot be empty' } });
      } else {
        this.getAllTodos();
        this.setState({ errors: { addTodo: '' } });
      }
    });
  };

  toggleEdit = (id, newTitle, editStatus) => {
    GetSendData.editTodo(id, newTitle, editStatus, () => {
      this.getAllTodos();
      this.setState({ title: newTitle });
    });
  };

  handleError = (errObj) => {
    this.setState({ errors: errObj });
  };

  // toggleWarning = (todoTitle) => {
  //   if (todoTitle.length < 3) {
  //     this.setState({ isWarning: true });
  //     return;
  //   } else this.setState({ isWarning: false });
  // };

  // showWarning = () => {
  //   return this.state.isWarning ? 'warning-message warning-db' : 'warning-message';
  // };

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
        <AppAddTodo
          onErrorFeedback={this.handleError}
          errors={this.state.errors.addTodo}
          key={this.state.todos._id}
          onClickAddTodo={this.handleAddTodo}
        />
        {/* <Link to='/about'>Go to About us page</Link> */}
        {/* <div className={this.showWarning()}>
          <h4>Your todo must be at least 3 charecters long! </h4>
        </div> */}
      </div>
    );
  }
}

export default TodoPage;
