import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';
import Navbar from './components/navbar/navbar';
//app styles
import './app.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, isFavourite: false, title: 'Buy Milk', isEditOn: false },

      { id: 2, isDone: true, isFavourite: false, title: 'Buy Tv', isEditOn: false },

      { id: 3, isDone: false, isFavourite: false, title: 'Go to Park', isEditOn: false },

      { id: 4, isDone: false, isFavourite: false, title: 'Learn React', isEditOn: false },
    ],
    currentId: 4,
    isWarning: false,
  };

  componentDidMount() {
    this.sortTodos();
  }

  sortTodos() {
    const todos = [...this.state.todos];
    //sorting todos
    todos.sort((a, b) => a.isDone - b.isDone);
    this.setState({ todos });
  }

  checkToggle = (id) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.isDone = !found.isDone;

    this.sortTodos();
  };

  checkFavToggle = (id) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.isFavourite = !found.isFavourite;
    //todos apacioje yra todos: todos
    this.setState({ todos });
  };

  handleDelete = (id) => {
    const filtered = this.state.todos.filter((td) => td.id !== id);
    this.setState({ todos: filtered });
    //arba
    // console.log('deleted', id);
    // const todos = [...this.state.todos];
    // const found = todos.find((t) => t.id === id);
    // console.log(todos.indexOf(found));
    // todos.splice(todos.indexOf(found), 1);
    // this.setState({ todos });
  };

  handleAddTodo = (todoTitle) => {
    if (todoTitle === '') {
      const warning = !this.state.isWarning;
      this.setState({ isWarning: warning });
      return;
    }
    const todosCopy = [...this.state.todos];
    const newCurrentId = 1 + this.state.currentId;
    const newTodoObj = { id: newCurrentId, isDone: false, title: todoTitle, isEditOn: false };
    todosCopy.unshift(newTodoObj);
    this.setState({ todos: todosCopy, currentId: newCurrentId });
  };

  toggleEdit = (id, newTitle) => {
    if (newTitle === '') {
      const warning = !this.state.isWarning;
      this.setState({ isWarning: warning });
      return;
    }
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
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
      <div className='app'>
        <Navbar />
        <AppHeader />
        <AppList
          todos={this.state.todos}
          onToggle={this.checkToggle}
          onFavToggle={this.checkFavToggle}
          onDelete={this.handleDelete}
          onToggleEdit={this.toggleEdit}
        />
        <AppAddTodo key={this.state.todos.id} onClickAddTodo={this.handleAddTodo} />
        <div className={this.showWarning()}>
          <h4>Please enter some text into your todo! </h4>
        </div>
      </div>
    );
  }
}

export default App;
