import React, { Component } from 'react';

import './BlogArticlePreview.css';

class BlogArticlePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    }
  }

  componentDidMount() {
  }

  render(){
    return(
      <div className="blog-article-preview-container">
        <img className="blog-article-image" src={this.props.displayimage} alt=""/>
        <div className="blog-article-preview-info">
          <p className="blog-article-preview-title">{this.props.articletitle}</p>
          <p className="blog-article-preview-description">{this.props.description}</p>
        </div>
        <p className="blog-article-preview-date">Published: {this.props.date}</p>
      </div>
    )
  }
}

export default BlogArticlePreview;
