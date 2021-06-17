import React, { Component } from 'react';
import alertCss from './alert.module.css';

class SimpleAlert extends Component {
  state = {};

  render() {
    // if (!this.props.onOff) return '';
    return (
      <div className={alertCss.simpleAlert}>
        <p className={alertCss.errorMsg}>
          {this.props.children}
          <i onClick={this.props.hideAlert} className='fa fa-times pl-2'></i>
        </p>
      </div>
    );
  }
}

export default SimpleAlert;
