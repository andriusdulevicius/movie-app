import React, { Component } from 'react';
import '../../../app.css';
import { validateTitle } from '../../../service/validate';

class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  sendAddTodo = () => {
    const { newTodo } = this.state;
    if (validateTitle(newTodo)) {
      this.props.onErrorFeedback({ addTodo: 'The title is too short' });
      return;
    }
    this.props.onClickAddTodo(newTodo);
    this.setState({ newTodo: '' });
  };
  handleEnter = (event) => {
    event.keyCode === 13 && this.sendAddTodo();
  };

  render() {
    return (
      <div className='add-todo-container'>
        <i className='fa fa-plus-circle' onClick={this.sendAddTodo}></i>
        <input
          onKeyDown={(event) => this.handleEnter(event)}
          onChange={this.handleChange}
          value={this.state.newTodo}
          className={this.props.errors ? 'is-invalid' : 'add-todo-input'}
          type='text'
          placeholder='Add new todo'
        />
        {this.props.errors && <p className='error-msg'>{this.props.errors}</p>}
      </div>
    );
  }
}

export default AppAddTodo;
