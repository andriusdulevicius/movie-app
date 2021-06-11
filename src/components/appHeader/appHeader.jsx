import React, { Component } from 'react';
import goldImg from './gold.jpg';
import './style.css';

class AppHeader extends Component {
  render() {
    return (
      <header>
        <img className='hero' src={goldImg} alt='very nice background leaves' />
        <a></a>
      </header>
    );
  }
}

export default AppHeader;
