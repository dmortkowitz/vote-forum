import React from 'react';
import Post from '../models/Post';
import Index from './Index';
import CreatePost from './CreatePost';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: [new Post('Title1', 'Content1', 'David', new Date(Date.now())), new Post('Title2', 'Content2', 'Hyewon', new Date(Date.now()))] 
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(title, content, user) {
    const timestamp = new Date(Date.now());
    let posts = this.state.posts.slice();
    posts.push(new Post(title, content, user, timestamp));
    this.setState({posts: posts});
  }

  render(){
    return (
      <div>
        <CreatePost newPost={this.addPost} />
        <Index posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
