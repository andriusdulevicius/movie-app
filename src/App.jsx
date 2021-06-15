import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import TodoPage from './components/todoPage/todoPage';
import Navbar from './components/navbar/navbar';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import HomePage from './pages/homePage';
import SingleTodo from './pages/singleTodo';
import NotFound from './pages/404';

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
            <Route path='/not-found' exact component={NotFound}></Route>
            <Redirect from='/' to='/todos'></Redirect>
            <Route path='/' exact component={HomePage}></Route>
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
