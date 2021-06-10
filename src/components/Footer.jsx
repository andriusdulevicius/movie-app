import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='pt-2 pb-2' style={{ background: 'grey', textAlign: 'center' }}>
        <h5>All rights reserved &copy;</h5>
        <h6>{new Date().toLocaleDateString()}</h6>
      </footer>
    );
  }
}

export default Footer;
