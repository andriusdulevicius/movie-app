import React, { Component } from 'react';

class SingleTodo extends Component {
  state = {};
  render() {
    //issitraukiam is params tuo pavadinimu kaip nurodyta Route
    return <h1>SingleTodo Page - {this.props.match.params.id} </h1>;
  }
}

export default SingleTodo;
