import React, { Component } from 'react';
import TodoPage from './components/todoPage/todoPage';
import Navbar from './components/navbar/navbar';

//app styles
import './app.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='app'>
        <Navbar />
        <TodoPage />
      </div>
    );
  }
}

export default App;
