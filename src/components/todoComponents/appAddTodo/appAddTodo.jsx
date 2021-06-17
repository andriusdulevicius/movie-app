import React, { Component } from 'react';
import '../../../app.css';
import { validateTitle } from '../../../service/validate';
import SimpleAlert from '../../common/alert/alert';

class AppAddTodo extends Component {
  state = {
    newTodo: '',
    onOff: true,
  };

  hideAlert = () => {
    this.setState({ onOff: false });
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  sendAddTodo = () => {
    this.setState({ onOff: true });
    const { newTodo } = this.state;
    if (validateTitle(newTodo)) {
      this.props.onErrorFeedback({ addTodo: validateTitle(newTodo) });
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
        {this.props.errors && this.state.onOff && (
          <SimpleAlert hideAlert={this.hideAlert}>{this.props.errors}</SimpleAlert>
        )}
      </div>
    );
  }
}

export default AppAddTodo;
