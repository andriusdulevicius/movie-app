import React, { Component } from 'react';

class FavouriteTodo extends Component {
  render() {
    const { todo } = this.props;
    let favClasses = todo.isFavourite ? 'fa fa-star' : 'fa fa-star-o';

    return <i className={favClasses} onClick={() => this.props.onFavToggle(todo._id, todo.isFavourite)}></i>;
  }
}

export default FavouriteTodo;