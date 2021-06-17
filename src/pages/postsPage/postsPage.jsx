import React, { Component } from 'react';
import PostList from '../../components/postsComponents/postList';
import AppAddPost from '../../components/postsComponents/appAddPost';
// import { Link } from 'react-router-dom';
import GetSendData from '../../service/getSendData';

class PostPage extends Component {
  state = {
    Posts: [],
    isWarning: false,
  };

  componentDidMount() {
    this.getAllPosts();
  }

  handleDelete = (id) => {
    GetSendData.deletePost(id, () => {
      this.getAllPosts();
    });
  };

  getAllPosts = () => {
    GetSendData.getAllPosts((result) => {
      this.setState({ Posts: result });
    });
  };

  handleAddPost = (newPost) => {
    // this.toggleWarning(title);
    GetSendData.addNewPost(newPost, () => {
      this.getAllPosts();
    });
  };

  // toggleEdit = (blogPost) => {
  //   if (blogPost.newTitle.length < 3 || blogPost.newTitle !== String ) {
  //     this.setState({ isWarning: true });
  //     return;
  //   } else {
  //     this.setState({ isWarning: false });
  //     GetSendData.editPost(blogPost, () => {
  //       this.getAllPosts();
  //       this.setState({ author: blogPost.author, title: blogPost.newTitle, text: blogPost.newText });
  //     });
  //   }
  // };

  toggleWarning = (PostTitle) => {
    if (PostTitle.length < 1) {
      this.setState({ isWarning: true });
      return;
    } else this.setState({ isWarning: false });
  };

  showWarning = () => {
    return this.state.isWarning ? 'warning-message warning-db' : 'warning-message';
  };

  render() {
    return (
      <div className='container'>
        <h2>Our blog Posts:</h2>
        <AppAddPost onAddPost={this.handleAddPost} />
        <PostList onDelete={this.handleDelete} posts={this.state.Posts} />
      </div>
    );
  }
}

export default PostPage;
