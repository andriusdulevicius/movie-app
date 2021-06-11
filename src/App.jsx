import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';
//app styles
import './app.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy Milk' },

      { id: 2, isDone: true, title: 'Buy Tv' },

      { id: 3, isDone: false, title: 'Go to Park' },

      { id: 4, isDone: false, title: 'Learn React' },
    ],
  };

  checkToggle = (id) => {
    if (this.state.todos.id === id) {
      const statusToggle = !this.state.todos.isDone;
      this.setState({ isDone: statusToggle });
    }
  };
  render() {
    return (
      <div className='app'>
        <AppHeader />
        <AppList todos={this.state.todos} onToggle={this.checkToggle} />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
