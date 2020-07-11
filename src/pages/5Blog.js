import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Main.css"
import styles from './Blog.module.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import ArticleOne from "../images/blog/nbavsnfl.jpg";
import ArticleTwo from "../images/blog/groceryshopping.png";
import ArticleThree from "../images/blog/chinesevirus.jpg"
import ArticleFour from "../articles/graphs4/spotifycropped.png"
import BlogArticlePreview from './components/BlogArticlePreview.js';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          'title':'Spotify Sentiment Classifier',
          'description':'An investigation into how the term "Chinese virus" has affected the Asian American community during the COVID-19 crisis as part of my final English presentaiton',
          'image': ArticleFour,
          'date': 'May 22, 2020',
          'link':'/Blog/Spotify-Sentiment'
        },
        {
          'title':'"Chinese Virus"',
          'description':'An investigation into how the term "Chinese virus" has affected the Asian American community during the COVID-19 crisis as part of my final English presentaiton',
          'image': ArticleThree,
          'date': 'April 4, 2020',
          'link':'/Blog/Chinese-Virus'
        },
        {
          'title':'Grocery Shopping Data Visualization',
          'description':'Grocery shopping data during the coronavirus pandemic for 3 people. Uses interactive Pie Chart as data visualization using D3.js.',
          'image': ArticleTwo,
          'date': 'April 4, 2020',
          'link':'/Blog/Grocery-Shopping'
        },
        {
          'title':'Athlete Branding Comparison (NBA vs NFL)',
          'description':'How does "building a brand" differ for players in different leagues? An investigation into the Instagram usage and growth of all NBA and NFL athletes in 2019.',
          'image': ArticleOne,
          'date': 'March 21, 2020',
          'link':'/Blog/Athlete-Branding-Comparison'
        }
      ]
    }
  }

  componentDidMount() {
  }

  render(){
    return(
    <div>
  		<Header pageNum = {4} />

  		<div className="everything">
        <h1 className= "underline">Data Science Blog</h1>
  			<div className={styles.article_list_big}>
  				
          <div className={styles.article_preview_container}>
            {this.state.projects.map((e,index) => index % 3 === 0 && <Link style={{ textDecoration: 'none' ,width:'33.333%'}} to={e.link}>
                                                                    <BlogArticlePreview articletitle = {e.title} description = {e.description} displayimage={e.image} date={e.date}/>
                                                                  </Link>)}
          </div>
          <div className={styles.article_preview_container}>
            {this.state.projects.map((e,index) => index % 3 === 1 && <Link style={{ textDecoration: 'none' ,width:'33.333%'}} to={e.link}>
                                                                    <BlogArticlePreview articletitle = {e.title} description = {e.description} displayimage={e.image} date={e.date}/>
                                                                  </Link>)}
          </div>
          <div className={styles.article_preview_container}>
            {this.state.projects.map((e,index) => index % 3 === 2 && <Link style={{ textDecoration: 'none' ,width:'33.333%'}} to={e.link}>
                                                                    <BlogArticlePreview articletitle = {e.title} description = {e.description} displayimage={e.image} date={e.date}/>
                                                                  </Link>)}
          </div>
  				
  			</div>
  		</div>
  		<Footer />
  	</div>
    )
  }
}

export default Blog;
