import React, { Component } from 'react';
import './style.css';
import FavouriteTodo from '../appFavouriteTodos/appFavouriteTodos';
class AppListElement extends Component {
  state = {
    editTitle: this.props.todo.title,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  render() {
    const { todo } = this.props;
    let titleClass = todo.isDone ? 'done-title' : '';
    const spanOrTodo = todo.isEditOn ? (
      <input type='text' value={this.state.editTitle} onChange={this.handleChange} />
    ) : (
      <span className={titleClass}>{todo.title}</span>
    );

    let classes = todo.isDone ? 'fa fa-check-circle' : 'fa fa-circle-thin';

    return (
      <li className='li-el app-todo-el'>
        <i className={classes} onClick={() => this.props.onToggle(todo.id)}></i>
        <FavouriteTodo onFavToggle={this.props.onFavToggle} todo={todo} />
        {spanOrTodo}
        <i className='fa fa-pencil' onClick={() => this.props.onToggleEditStatus(todo.id, this.state.editTitle)}></i>
        <i className='fa fa-trash' onClick={() => this.props.onDelete(todo.id)}></i>
      </li>
    );
  }
}

export default AppListElement;
