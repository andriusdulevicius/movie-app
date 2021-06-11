import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';
//app styles
import './app.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='app'>
        <h1>Simple Todo App</h1>
        <AppHeader />
        <AppList />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
