import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Blog.css';
import Header from './Header.js';
import Footer from './Footer.js';
import ArticleOne from "../images/blog/nbavsnfl.jpg";
import BlogArticlePreview from './BlogArticlePreview.js';

import ProfilePic from "../images/profile.jpeg";

import { FaFilePdf } from 'react-icons/fa';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          'title':'Social Influence of Athletes (NBA vs NFL)',
          'description':'America’s “melting pot” of the past was more so defined by conformity and disqualification of nonwhite groups. In Deconstructing America, Patrick J. Buchanan argues that our completely unified nation of the past is one that symbolized strength. Buchanan believes that the United States',
          'image': ArticleOne,
          'date': 'February 22, 2020',
          'link':'/Athlete-Branding-Comparison'
        },
        {
          'title':'Social Influence of Athletes (NBA vs NFL)',
          'description':'Buchanan argues that our completely unified nation of the past is one that symbolized strength. Buchanan believes that the United States',
          'image': ArticleOne,
          'date': 'February 22, 2020',
          'link':'/'
        },
        {
          'title':'Social Influence of Athletes (NBA vs NFL)',
          'description':'America’s “melting pot” of the past was more so defined by conformity and disqualification of nonwhite groups. In Deconstructing America, Patrick J. Buchanan argues that our completely unified nation of the past is one that symbolized strength. Buchanan believes that the United States',
          'image': ArticleOne,
          'date': 'February 22, 2020',
          'link':'/'
        },
        {
          'title':'Social Influence of Athletes (NBA vs NFL)',
          'description':'America’s “melting pot” of the past was more so defined by conformity and disqualification of nonwhite groups. In Deconstructing America, Patrick J. Buchanan argues that our completely unified nation of the past is one that symbolized strength. Buchanan believes that the United States',
          'image': ArticleOne,
          'date': 'February 22, 2020',
          'link':'/projects'
        },
        {
          'title':'Social Influence of Athletes (NBA vs NFL)',
          'description':'America’s “melting pot” of the past was more so defined by conformity and disqualification of nonwhite groups. In Deconstructing America, Patrick J. Buchanan argues that our completely unified nation of the past is one that symbolized strength. Buchanan believes that the United States',
          'image': ArticleOne,
          'date': 'February 22, 2020',
          'link':'/education'
        }
      ]
    }
  }

  componentDidMount() {
  }

  render(){
    return(
    <body class="container">
  		<Header pageNum = {4} />

  		<div class="everything">
        <h1 class= "underline">Data Science Blog</h1>
  			<div class="article-list-big">
  				
          <div>
            {this.state.projects.map((e,index) => index%3 == 0 && <Link style={{ textDecoration: 'none' ,width:'33.333%'}} to={e.link}>
                                                                    <BlogArticlePreview articletitle = {e.title} description = {e.description} displayimage={e.image} date={e.date}/>
                                                                  </Link>)}
          </div>
          <div>
            {this.state.projects.map((e,index) => index%3 == 1 && <Link style={{ textDecoration: 'none' ,width:'33.333%'}} to={e.link}>
                                                                    <BlogArticlePreview articletitle = {e.title} description = {e.description} displayimage={e.image} date={e.date}/>
                                                                  </Link>)}
          </div>
          <div>
            {this.state.projects.map((e,index) => index%3 == 2 && <Link style={{ textDecoration: 'none' ,width:'33.333%'}} to={e.link}>
                                                                    <BlogArticlePreview articletitle = {e.title} description = {e.description} displayimage={e.image} date={e.date}/>
                                                                  </Link>)}
          </div>
  				
  			</div>
  		</div>

  		<Footer />

  	</body>
    )
  }
}

export default Blog;
