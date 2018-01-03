import React from 'react';

export default class BlogList extends React.Component {
  render() {
    let blogPosts = this.props.data.map(post => {
      return(
        <div className="panel panel-primary">
          Title : {post.title}
        </div>
      )
    })
    return (
      <div className = "panel panel-success">
        <h1>All Posts</h1>
        {blogPosts}
      </div>
    );
  }
  
}