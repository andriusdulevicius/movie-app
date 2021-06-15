import React, { Component } from 'react';
//importuojam modulini individualu css
import navStyles from './navbar.module.css';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className={navStyles.navbar}>
        <a className='logo' href='/'>
          ReactApp
        </a>
        <div className='nav-links'>
          <a className={navStyles.navLink} href='/'>
            Home
          </a>
          <a className={navStyles.navLink} href='/about'>
            About
          </a>
          <a className={navStyles.navLink} href='/todos'>
            Todos
          </a>
          <a className={navStyles.navLink} href='/contact'>
            Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
