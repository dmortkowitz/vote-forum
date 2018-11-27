import React from 'react';
import PropTypes from 'prop-types';
import PostClass from '../models/Post';
import Post from './Post';

function Index(props){

  const posts = props.posts.map((post, index) => 
    <Post post={post} key={index}/>
  );
  return (
    <div>
      <style jsx>{`
      `}</style>
      {posts}
    </div>
  );
}

Index.propTypes = {
  posts: PropTypes.arrayOf(PostClass),
};

export default Index;