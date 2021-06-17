import React, { Component } from 'react';
import goldImg from './gold.jpg';
import './style.css';

class AppHeader extends Component {
  state = {
    currentTime: this.showTime,
  };

  componentDidMount() {
    this.handleTimeShow();
  }

  showDate = () => {
    let now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const data = now.toLocaleString('LT', options);

    return data;
  };

  showTime = () => {
    let now = new Date();
    const time = now.toLocaleTimeString();
    return time;
  };

  handleTimeShow = () => {
    setInterval(() => {
      this.setState({ currenTime: this.showTime });
    }, 1000);
  };

  handleImgClick = () => {
    setInterval(() => {
      console.log('sakiau');
    }, 1000);
  };

  render() {
    return (
      <header>
        <img onClick={this.handleImgClick} className='hero' src={goldImg} alt='very nice background leaves' />
        <p className='date'>
          {this.showDate()} | {this.showTime()}
        </p>
      </header>
    );
  }
}

export default AppHeader;
