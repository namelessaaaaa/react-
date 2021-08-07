import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
      this.props.comments.map((comment) => {
        return (
          <div key={comment}>
            <Comment username={comment.username} usertext={comment.usertext} />
          </div>
        )
      })
    )
  }
}

export default CommentList