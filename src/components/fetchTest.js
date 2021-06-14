import React, { Component } from 'react';

class FetchTest extends Component {
  state = {
    todoTitle: '',
  };

  syncTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Fetch test</h1>
        <input onChange={this.syncTitle} type='text' placeholder='add new todo' />
      </div>
    );
  }
}

export default FetchTest;
