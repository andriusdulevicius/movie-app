import React, { Component } from 'react';

import PostListElement from './postListElement';

class PostList extends Component {
  render() {
    const { onDelete, onEdit } = this.props;
    return (
      <ul className='post-list'>
        {this.props.posts.map((Post) => (
          <PostListElement
            key={Post._id}
            Post={Post}
            onDelete={onDelete}
            onEdit={onEdit}
            editStatus={this.props.editStatus}
          />
        ))}
      </ul>
    );
  }
}

export default PostList;
