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

  render() {
    return (
      <div className='add-todo-container'>
        <i className='fa fa-plus-circle' onClick={this.sendAddTodo}></i>
        <input
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
