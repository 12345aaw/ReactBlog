import React from 'react';

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '', title: '', text: '', tags: [],
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    let title = this.state.title.trim();
    let tags = this.state.tags.trim();
    if (!text || !author || !title) {
      return;
    }
    this.props.onSubmit({
      author: author,
      text: text,
      title: title,
      tags: tags,
    });
  }
  render() {
    return (    
      <form OnSubmit={this.handleSubmit}>
        <h1>Blog</h1>
        <div className="well">
          <div className = "form-group">
            <label htmlFor="postTitle">
              Title
              <input id="postTitle" className="form-control" placeholder="title" />
            </label>     
          </div>
          <div className="form-group">
            <label htmlFor="postTextArea">
              <textarea id="postTextArea" placeholder="Post" className="form-control" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </div>
      </form>
    );
  }
}
