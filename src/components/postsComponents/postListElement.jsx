import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListElement extends Component {
  state = {
    editTitle: this.props.todo.title,
    editText: this.props.todo.text,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value, editText: event.target.value });
  };
  handleEnter = (event) => {
    const { todo, onToggleEdit } = this.props;
    event.keyCode === 13 && onToggleEdit(todo._id, this.state.editTitle, todo.isEditOn);
  };

  render() {
    const { _id, title, author, body, createdAt } = this.props.Post;
    const editLink = `/blog/single/${_id}`;

    return (
      <li className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <h6 className='text-muted'>{author}</h6>
        <p className='card-text'>{body}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <Link to={editLink} className='btn btn-sm btn-outline-secondary'>
              Edit
            </Link>
          </div>
          <div className='btn-group'>
            <button onClick={() => this.props.onDelete(_id)} className='btn btn-sm btn-danger'>
              Delete
            </button>
          </div>

          <small className='text-muted'>{createdAt.toLocaleString()}</small>
        </div>
      </li>
    );
  }
}

export default PostListElement;
