import React, { Component } from 'react';
import './style.css';

class AppListElement extends Component {
  render() {
    const { todo } = this.props;
    let classes = todo.isDone ? 'fa fa-check-circle' : 'fa fa-circle-thin';
    let titleClass = todo.isDone ? 'done-title' : '';
    return (
      <li className='li-el app-todo-el'>
        <i className={classes} onClick={() => this.props.onToggle(todo.id)}></i>
        <span className={titleClass}>{todo.title}</span>
        <i className='fa fa-pencil'></i>
        <i className='fa fa-trash'></i>
      </li>
    );
  }
}

export default AppListElement;
