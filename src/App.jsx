import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import TodoPage from './components/todoPage/todoPage';
import Navbar from './components/navbar/navbar';
import ContactPage from './components/pages/contact';
import AboutPage from './components/pages/about';
import HomePage from './components/pages/homePage';
import SingleTodo from './components/pages/singleTodo';

//app styles
import './app.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/todos/:id' component={SingleTodo}></Route>
            <Route path='/todos' component={TodoPage}></Route>
            <Route path='/about' component={AboutPage}></Route>
            <Route path='/contact' component={ContactPage}></Route>
            <Route path='/' component={HomePage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
