import React, { Component } from 'react';

class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  sendAddTodo = () => {
    this.props.onClickAddTodo(this.state.newTodo);
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
          className='add-todo-input'
          type='text'
          placeholder='Add new todo'
        />
      </div>
    );
  }
}

export default AppAddTodo;
