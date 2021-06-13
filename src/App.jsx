import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';
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
  };

  checkToggle = (id) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.isDone = !found.isDone;
    //todos apacioje yra todos: todos
    this.setState({ todos: todos });
  };

  C;
  checkFavToggle = (id) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.isFavourite = !found.isFavourite;
    //todos apacioje yra todos: todos
    this.setState({ todos });
  };

  handleDelete = (id) => {
    // console.log('deleted', id);
    // const todos = [...this.state.todos];
    // const found = todos.find((t) => t.id === id);
    // console.log(todos.indexOf(found));
    // todos.splice(todos.indexOf(found), 1);
    // this.setState({ todos });
    //arba
    const filtered = this.state.todos.filter((td) => td.id !== id);
    this.setState({ todos: filtered });
  };

  handleAddTodo = (todoTitle) => {
    const todosCopy = [...this.state.todos];
    const newCurrentId = 1 + this.state.currentId;
    const newTodoObj = { id: newCurrentId, isDone: false, title: todoTitle, isEditOn: false };
    todosCopy.push(newTodoObj);
    this.setState({ todos: todosCopy, currentId: newCurrentId });
  };

  toggleEditStatus = (id, newTitle) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.isEditOn = !found.isEditOn;
    found.title = newTitle;
    //todos apacioje yra todos: todos
    this.setState({ todos });
  };

  render() {
    return (
      <div className='app'>
        <AppHeader />
        <AppList
          todos={this.state.todos}
          onToggle={this.checkToggle}
          onFavToggle={this.checkFavToggle}
          onDelete={this.handleDelete}
          onToggleEditStatus={this.toggleEditStatus}
        />
        <AppAddTodo key={this.state.todos.id} onClickAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
