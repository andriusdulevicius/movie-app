import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';
//app styles
import './app.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy Milk', isEditOn: false },

      { id: 2, isDone: true, title: 'Buy Tv', isEditOn: false },

      { id: 3, isDone: false, title: 'Go to Park', isEditOn: false },

      { id: 4, isDone: false, title: 'Learn React', isEditOn: false },
    ],
  };

  checkToggle = (id) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.isDone = !found.isDone;
    this.setState({ todos });
  };

  handleDelete = (id) => {
    console.log('deleted', id);
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    console.log(todos.indexOf(found));
    todos.splice(todos.indexOf(found), 1);
    this.setState({ todos });
    //arba
    // const filtered = this.state.todos.filter((td) => td.id === id);
    // this.setState({ filtered });
  };

  handleEdit = (id) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === id);
    found.title = `<input value=${found.title}>`;
    this.setState({ todos });
  };

  render() {
    return (
      <div className='app'>
        <AppHeader />
        <AppList
          todos={this.state.todos}
          onToggle={this.checkToggle}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
