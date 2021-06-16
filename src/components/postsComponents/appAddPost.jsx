import React, { Component } from 'react';

class AppAddPost extends Component {
  state = {
    newPost: {
      newPostTitle: '',
      newPostAuthor: '',
      newPostText: '',
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
    this.setState({ newPost: { newPostTitle: '', newPostAuthor: '', newPostText: '' } });
  };

  render() {
    return (
      <div className='add-post-container'>
        <h2>Add new Blog Post</h2>
        <form onSubmit={this.sendAddPost}>
          <div className='form-group'>
            <label>Title</label>
            <input onChange={this.handleChange} type='text' className='form-control' name='newPostTitle' required />
          </div>
          <div className='form-group'>
            <label>Author</label>
            <input onChange={this.handleChange} required type='text' className='form-control' name='newPostAuthor' />
          </div>
          <div className='form-group'>
            <label>Body</label>
            <textarea
              onChange={this.handleChange}
              required
              type='text'
              className='form-control'
              name='newPostText'
            ></textarea>
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
