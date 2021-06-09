import { getSuggestedQuery } from '@testing-library/dom';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='pt-2 pb-2' style={{ background: 'grey', textAlign: 'center' }}>
        <h5>All rights reserved 2021</h5>
      </footer>
    );
  }
}

export default Footer;
