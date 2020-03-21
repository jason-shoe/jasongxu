import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div class="blog-article-preview-container">
        <img class="blog-article-image" src={this.props.displayimage} />
        <div class="blog-article-preview-info">
          <p class="blog-article-preview-title">{this.props.articletitle}</p>
          <p class="blog-article-preview-description">{this.props.description}</p>
        </div>
        <p class="blog-article-preview-date">Published: {this.props.date}</p>
      </div>
    )
  }
}

export default BlogArticlePreview;
