import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Comment extends Component {
  render() {
    return (
      <div>
        <span>{this.props.username}：</span>
        <span>{this.props.usertext}</span>
      </div>
    )
  }
}

export default Comment