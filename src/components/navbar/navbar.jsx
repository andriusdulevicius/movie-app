import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//importuojam modulini individualu css
import navStyles from '../../navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={navStyles.navbar}>
        <Link className='logo' to='/'>
          ReactApp
        </Link>
        <div className='nav-links'>
          <Link className={navStyles.navLink} to='/'>
            Home
          </Link>
          <Link className={navStyles.navLink} to='/about'>
            About
          </Link>
          <Link className={navStyles.navLink} to='/todos'>
            Todos
          </Link>
          <Link className={navStyles.navLink} to='/posts'>
            Posts
          </Link>
          <Link className={navStyles.navLink} to='/contact'>
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
