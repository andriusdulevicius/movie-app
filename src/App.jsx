import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <h1>Simple Todo App</h1>
        <AppHeader />
        <AppList />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
