import React, { Component } from 'react';
import goldImg from './gold.jpg';
import './style.css';

class AppHeader extends Component {
  showTime = () => {
    let now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const data = now.toLocaleString('LT', options);

    return data;
  };

  render() {
    return (
      <header>
        <img className='hero' src={goldImg} alt='very nice background leaves' />
        <p className='date'> {this.showTime()}</p>
      </header>
    );
  }
}

export default AppHeader;
