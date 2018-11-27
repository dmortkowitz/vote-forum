import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      post: props.post,
    };
    this.onUpVoteHandler = this.onUpVoteHandler.bind(this);
    this.onDownVoteHandler = this.onDownVoteHandler.bind(this);
    this.title = this.state.post.title;
    this.content = this.state.post.content;
    this.user = this.state.post.user;
    this.timestamp = this.state.post.timestamp.toDateString();
  }
  onUpVoteHandler() {
    let post = this.state.post;
    post.upVote++;
    this.setState({post: post});
    this.props.sortPosts();

  }   

  onDownVoteHandler() {
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
        <p><button onClick={this.onUpVoteHandler}>+</button>&nbsp;<button onClick={this.onDownVoteHandler}>-</button></p>
      </div>
    );
  }
}

Post.propTypes = {
  sortPosts: PropTypes.func,
};

export default Post;