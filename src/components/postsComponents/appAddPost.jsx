import React, { Component } from 'react';

class AppAddPost extends Component {
  state = {
    newPost: {
      title: '',
      author: '',
      text: '',
    },
  };

  handleChange = (event) => {
    const newPostCopy = { ...this.state.newPost };
    newPostCopy[event.target.name] = event.target.value;

    this.setState({ newPost: newPostCopy });
  };

  sendAddPost = (e) => {
    e.preventDefault();
    this.props.onAddPost(this.state.newPost);
    this.setState({ newPost: { title: '', author: '', text: '' } });
  };

  render() {
    return (
      <div className='add-post-container mb-4'>
        <h2>Add new Blog Post</h2>
        <form onSubmit={this.sendAddPost}>
          <div className='form-group'>
            <label>Title</label>
            <input onChange={this.handleChange} type='text' className='form-control' name='title' required />
          </div>
          <div className='form-group'>
            <label>Author</label>
            <input onChange={this.handleChange} required type='text' className='form-control' name='author' />
          </div>
          <div className='form-group'>
            <label>Body</label>
            <textarea onChange={this.handleChange} required type='text' className='form-control' name='text'></textarea>
          </div>

          <button type='submit' className='btn btn-primary'>
            Add post
          </button>
        </form>
      </div>
    );
  }
}

export default AppAddPost;
