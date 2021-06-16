import React, { Component } from 'react';

import PostListElement from './postListElement';

class PostList extends Component {
  render() {
    const { onDelete, onToggleEdit } = this.props;
    return (
      <ul className='post-list'>
        {this.props.posts.map((Post) => (
          <PostListElement key={Post._id} Post={Post} onDelete={onDelete} onToggleEdit={onToggleEdit} />
        ))}
      </ul>
    );
  }
}

export default PostList;
