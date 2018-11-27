import React from 'react';
import PropTypes from 'prop-types';
import PostClass from '../models/Post';
import Post from './Post';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.sortPosts = props.sortPosts;
    this.posts = props.posts.map((post) => 
      <Post post={post} key={post.title+'-'+post.content} sortPosts={this.sortPosts} />);
  }

  render() {
    console.log("index render");
    this.posts = this.props.posts.map((post) => 
      <Post post={post} key={post.title+'-'+post.content} sortPosts={this.sortPosts} />);
    console.log(this.posts);
    return (
      <div>
        <style jsx>{`
        `}</style>
        {this.posts}
      </div>
    );
  }
}

Index.propTypes = {
  posts: PropTypes.arrayOf(PostClass),
  sortPosts: PropTypes.func,
};

export default Index;