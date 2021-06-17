import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import TodoPage from './pages/todoPage/todoPage';
import Navbar from './components/navbar/navbar';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import HomePage from './pages/homePage';
import SingleTodo from './pages/singleTodo';
import NotFound from './pages/404';
import PostPage from './pages/postsPage/postsPage';

//app styles
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route path='/posts' component={PostPage}></Route>
            <Route path='/not-found' exact component={NotFound}></Route>
            <Route path='/' exact component={HomePage}></Route>
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
