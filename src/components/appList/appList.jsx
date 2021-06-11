import React, { Component } from 'react';
import './style.css';
import AppListElement from '../appListElement/appListElement';

class AppList extends Component {
  render() {
    return (
      <ul className='todo-list'>
        {this.props.todos.map((todo) => (
          <AppListElement key={todo.id} todo={todo} onToggle={this.props.onToggle} onDelete={this.props.onDelete} />
        ))}
      </ul>
    );
  }
}

export default AppList;
