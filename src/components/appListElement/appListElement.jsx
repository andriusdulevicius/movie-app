import React, { Component } from 'react';

class AppListElement extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li className='li-el'>
        <i className='fa fa-check-circle'></i>
        {todo.title}
      </li>
    );
  }
}

export default AppListElement;
