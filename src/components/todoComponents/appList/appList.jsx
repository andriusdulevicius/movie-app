import React, { Component } from 'react';
import './style.css';
import AppListElement from '../appListElement/appListElement';

class AppList extends Component {
  render() {
    const { onToggle, onFavToggle, onDelete, onToggleEdit, showWarning, errors } = this.props;
    return (
      <ul className='todo-list'>
        {this.props.todos.map((todo) => (
          <AppListElement
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onFavToggle={onFavToggle}
            onDelete={onDelete}
            onToggleEdit={onToggleEdit}
            showWarning={showWarning}
            errors={errors}
          />
        ))}
      </ul>
    );
  }
}

export default AppList;
