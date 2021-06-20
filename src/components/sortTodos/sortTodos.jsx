import React, { Component } from 'react';

class SortTodos extends Component {
  state = {
    isDoneOn: false,
    isUndoneOn: false,
  };

  render() {
    return (
      <div className='container'>
        <button
          onClick={async () => {
            await this.setState({ isDoneOn: !this.state.isDoneOn });
            this.props.sortDoneTodos(this.state.isDoneOn);
          }}
          className='btn btn info'
        >
          Get Done Todos
        </button>
        <button
          onClick={async () => {
            await this.setState({ isUndoneOn: !this.state.isUndoneOn });
            this.props.sortUndoneTodos(this.state.isUndoneOn);
          }}
          className='btn btn info'
        >
          Get Undone Todos
        </button>
      </div>
    );
  }
}

export default SortTodos;
