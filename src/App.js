import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from './pages/navbar';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/404';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/' exact component={Home}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect to='/not-found'></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default App;
