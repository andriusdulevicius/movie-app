import React, { Component } from 'react';
import goldImg from './gold.jpg';
import './style.css';

class AppHeader extends Component {
  showTime = () => {
    let now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const data = now.toLocaleDateString('LT', options);
    // set interval vygdo funkcija kas intervale nurodyta laika milisekundem

    setInterval(() => {
      now = new Date();
      let laikas = now.toLocaleString();
      return laikas;
    }, 1000);
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
