import React, { Component } from 'react';

class SortTodos extends Component {
  state = {};

  render() {
    return (
      <div className='container'>
        <button onClick={this.props.sortDoneTodos} className='btn btn info'>
          Get Done Todos
        </button>
        <button onClick={this.props.sortUndoneTodos} className='btn btn info'>
          Get Undone Todos
        </button>
      </div>
    );
  }
}

export default SortTodos;
