import React from 'react';

function Post(props) {
  console.log(props.post.title);
  const title = props.post.title;
  const content = props.post.content;
  const user = props.post.user;
  const timestamp = props.post.timestamp.toDateString();
  return (
    <div>
      <h3>{title} by {user} - {timestamp}</h3>
      <p>{content}</p>
    </div>
  );
}



export default Post;