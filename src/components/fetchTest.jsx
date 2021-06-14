import React, { Component } from 'react';
import GetSendData from '../service/getSendData';

class FetchTest extends Component {
  state = {
    todoTitle: '',
    todos: [],
  };

  syncTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  handleNewTodo = () => {
    GetSendData.addNewTodo(this.state.todoTitle, () => {
      this.getAllTodos();
      this.setState({ todoTitle: '' });
    });
  };

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
    GetSendData.getAllTodos((res) => {
      this.setState({ todos: res, todoTitle: '' });
    });
  };

  render() {
    return (
      <div>
        <h1>Fetch test</h1>
        <input value={this.state.todoTitle} onChange={this.syncTitle} type='text' placeholder='add new todo' />
        <button onClick={this.handleNewTodo}>Add todo </button>

        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchTest;
