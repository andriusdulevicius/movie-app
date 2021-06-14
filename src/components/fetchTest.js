import React, { Component } from 'react';

class FetchTest extends Component {
  state = {
    todoTitle: '',
  };

  syncTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  handleNewTodo = () => {
    const newTodo = { title: this.state.todoTitle };
    fetch('http://localhost:3002/api/todos/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Fetch test</h1>
        <input onChange={this.syncTitle} type='text' placeholder='add new todo' />
        <button onClick={this.handleNewTodo}>Add todo </button>
      </div>
    );
  }
}

export default FetchTest;
