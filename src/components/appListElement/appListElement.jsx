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
  handleEnter = (event) => {
    const { todo, onToggleEdit } = this.props;
    event.keyCode === 13 && onToggleEdit(todo._id, this.state.editTitle, todo.isEditOn);
  };
  render() {
    const { todo, onToggle, onToggleEdit, onDelete, onFavToggle } = this.props;
    let titleClass = todo.isDone ? 'done-title' : '';
    const spanOrTodo = todo.isEditOn ? (
      <input type='text' value={this.state.editTitle} onChange={this.handleChange} onKeyDown={this.handleEnter} />
    ) : (
      <span className={titleClass}>{todo.title}</span>
    );

    let classes = todo.isDone ? 'fa fa-check-circle' : 'fa fa-circle-thin';

    return (
      <li className='li-el app-todo-el'>
        <i className={classes} onClick={() => onToggle(todo._id, todo.isDone)}></i>
        <FavouriteTodo onFavToggle={onFavToggle} todo={todo} />
        {spanOrTodo}
        {todo.isDone ? (
          ''
        ) : (
          <i className='fa fa-pencil' onClick={() => onToggleEdit(todo._id, this.state.editTitle, todo.isEditOn)}></i>
        )}

        <i className='fa fa-trash' onClick={() => onDelete(todo._id)}></i>
      </li>
    );
  }
}

export default AppListElement;
