import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';


class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: [{
        username: 'lj',
        usertext: 'sadf'
      }]
    }
  }


  render() {
    return(
      <div className='wrapper'>
        <CommentInput />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp