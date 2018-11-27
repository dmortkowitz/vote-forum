import React from 'react';
import PropTypes from 'prop-types';
import $ from '../../node_modules/jquery/dist/jquery';

function CreatePost(props) {
  let onSubmitHandler = event => {
    event.preventDefault();
    props.newPost($('#title').val(), $('#content').val(), $('#user').val());
  };
  return (
    <div>
      <style jsx>{`
            `}
      </style>
      <form onSubmit={onSubmitHandler}>
        <input id='title' type='text' placeholder='title'></input>
        <input id='content' type='text' placeholder='content'></input>
        <input id='user' type='text' placeholder='user'></input>
        <button type='submit'>Post</button>
      </form>

    </div>
  );

}

CreatePost.propTypes = {
  newPost: PropTypes.func,
};

export default CreatePost;