import React from 'react';
import PropTypes from 'prop-types';
import PostClass from '../models/Post';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      post: props.post,
    };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.title = this.state.post.title;
    this.content = this.state.post.content;
    this.user = this.state.post.user;
    this.timestamp = this.state.post.timestamp.toDateString();
  }
  handleUpVote() {
    let post = this.state.post;
    post.upVote++;
    this.setState({post: post});
    this.props.sortPosts();

  }   

  handleDownVote() {
    let post = this.state.post;
    post.upVote--;
    this.setState({post: post});
    this.props.sortPosts();
  }

  render() {
    return (
      <div>
        <h3>{this.title} by {this.user} - {this.timestamp}</h3>
        <p>{this.content}</p>
        <p>Vote{this.state.post.upVote}</p>
        <p><button onClick={this.handleUpVote}>+</button>&nbsp;<button onClick={this.handleDownVote}>-</button></p>
      </div>
    );
  }
}

Post.propTypes = {
  sortPosts: PropTypes.func,
  post: PropTypes.instanceOf(PostClass),
};

export default Post;