import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListElement extends Component {
  state = {
    editedPost: { title: this.props.title, author: this.props.author, text: this.props.text },
  };

  handleChange = (event) => {
    const editedPostCopy = { ...this.state.editedPost };
    editedPostCopy[event.target.name] = event.target.value;

    this.setState({ editedPost: editedPostCopy });
  };

  spanOrInput() {
    const { title, author, text } = this.props.Post;
    if (this.props.editStatus) {
      return (
        <>
          <input className='card-title' name='title' value={title} />
          <input className='text-muted' name='author' value={author} />
          <input className='card-text' name='text' value={text} />
        </>
      );
    } else {
      return (
        <>
          <h5 className='card-title'>{title}</h5>
          <h6 className='text-muted'>{author}</h6>
          <p className='card-text'>{text}</p>
        </>
      );
    }
  }

  render() {
    const { _id, createdAt } = this.props.Post;
    const editLink = `/blog/single/${_id}`;

    return (
      <li className='card mb-4 shadow-sm'>
        <div className='card-body'>
          {this.spanOrInput}
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <Link
                to={editLink}
                className='btn btn-sm btn-outline-secondary'
                onClick={() => this.props.onEdit(this.state.editedPost)}
              >
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
        </div>
      </li>
    );
  }
}

export default PostListElement;
