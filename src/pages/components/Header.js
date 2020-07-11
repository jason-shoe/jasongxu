import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Scroll from 'react-scroll'
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RedirectLink} from 'react-router-dom';
var ScrollLink = Scroll.ScrollLink;







class Header extends Component {

  componentDidMount() {
    
  }

  render(){
    return(
      <div style={{width:'100%'}}>
        {this.props.pageNum === 0 && <div className={styles.header}>
          <Link to="about_element" spy={true} smooth={true} duration={500} className={styles.header_text} activeClass={styles.header_text_active}>JASON XU</Link>
          <div className = {styles.menu}>
            <Link id={styles.to_hide} to="experience_element" spy={true} offset={-75} smooth={true} duration={500} className={styles.header_text} activeClass={styles.header_text_active}>EXPERIENCE</Link>
            <Link id={styles.to_hide} to="education_element" spy={true} offset={-75} smooth={true} duration={500} className={styles.header_text} activeClass={styles.header_text_active}>EDUCATION</Link>
            <Link id={styles.to_hide} to="skills_element" spy={true} offset={-75} smooth={true} duration={500} className={styles.header_text} activeClass={styles.header_text_active}>SKILLS</Link>
            <Link id={styles.to_hide} to="projects_element" spy={true} offset={-75} smooth={true} duration={500} className={styles.header_text} activeClass={styles.header_text_active}>PROJECTS</Link>
            
            <RedirectLink to="/blog" className={styles.header_text}>BLOG</RedirectLink>
          </div>
        </div>}

        {this.props.pageNum !== 0 && <div className={styles.header}>
          <RedirectLink to="/" className={styles.header_text}>JASON XU</RedirectLink>
          <div className = {styles.menu}>
            <RedirectLink id={styles.to_hide} to="/" className={styles.header_text}>EXPERIENCE</RedirectLink>
            <RedirectLink id={styles.to_hide} to="/" className={styles.header_text}>EDUCATION</RedirectLink>
            <RedirectLink id={styles.to_hide} to="/" className={styles.header_text}>SKILLS</RedirectLink>
            <RedirectLink id={styles.to_hide} to="/" className={styles.header_text}>PROJECTS</RedirectLink>
            
            <RedirectLink to="/blog" className={styles.blog_selected}>BLOG</RedirectLink>
          </div>
        </div>}

      </div>
    )
  }
}

export default Header;
