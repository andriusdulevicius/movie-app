import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myStyles from './nav.module.css';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className={myStyles.linksContainer}>
        <Link to='/'> Home </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/about'> About </Link>
      </div>
    );
  }
}

export default Navbar;
