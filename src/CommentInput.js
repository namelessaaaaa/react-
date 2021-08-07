import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CommentInput extends Component {
  handleClick() {
    console.log(this.querySelector('#username'))
  }

  render() {
    return (
      <div>
        <div>
          <span>用户名：</span>
          <input type='text' id='username'></input>
        </div>
        <div>
          <span>评论内容：</span>
          <input type='text' id='usertext'></input>
        </div>
        <button onClick={this.handleClick.bind(this)}>发布</button>
      </div>
    )
  }

}

export default CommentInput