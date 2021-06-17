import React, { Component } from 'react';
import './style.css';
import FavouriteTodo from '../appFavouriteTodos/appFavouriteTodos';
import SimpleAlert from '../../common/alert/alert';
class AppListElement extends Component {
  state = {
    editTitle: this.props.todo.title,
    onOff: true,
  };

  hideAlert = () => {
    this.setState({ onOff: false });
  };

  showAlertAndSendProps = () => {
    const { isEditOn, _id } = this.props.todo;
    this.setState({ onOff: true });
    this.props.onToggleEdit(_id, this.state.editTitle, isEditOn);
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };
  handleEnter = (event) => {
    const { todo, onToggleEdit } = this.props;
    event.keyCode === 13 && onToggleEdit(todo._id, this.state.editTitle, todo.isEditOn);
  };
  render() {
    const { todo, onToggle, onDelete, onFavToggle, errors } = this.props;
    let titleClass = todo.isDone ? 'done-title' : '';
    const spanOrTodo = todo.isEditOn ? (
      <React.Fragment>
        <input
          className={errors ? 'add-todo-input is-invalid' : 'add-todo-input'}
          type='text'
          value={this.state.editTitle}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
      </React.Fragment>
    ) : (
      <span className={titleClass}>{todo.title}</span>
    );

    let checkClasses = todo.isDone ? 'fa fa-check-circle' : 'fa fa-circle-thin';

    return (
      <li className='li-el app-todo-el'>
        {!todo.isEditOn && (
          <React.Fragment>
            <i className={checkClasses} onClick={() => onToggle(todo._id, todo.isDone)}></i>
            <FavouriteTodo onFavToggle={onFavToggle} todo={todo} />
          </React.Fragment>
        )}
        {spanOrTodo}
        {todo.isDone ? '' : <i className='fa fa-pencil' onClick={this.showAlertAndSendProps}></i>}
        {todo.isEditOn && errors && this.state.onOff && <SimpleAlert hideAlert={this.hideAlert}>{errors}</SimpleAlert>}

        <i className='fa fa-trash' onClick={() => onDelete(todo._id)}></i>
      </li>
    );
  }
}

export default AppListElement;
