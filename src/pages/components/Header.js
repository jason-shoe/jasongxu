import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';


class Header extends Component {

  componentDidMount() {
    
  }

  render(){
    return(
      <div className="container">
    		<div className="header">
          {this.props.pageNum !== 0 && <Link className = "header_text" to="/">JASON XU</Link>}
    			{this.props.pageNum === 0 && <Link id="current_page" className = "header_text" to="/">JASON XU</Link>}
    			<div className = "menu">
    				{this.props.pageNum !== 1 && <Link className = "header_text" to="/education">EDUCATION</Link>}
            {this.props.pageNum === 1 && <Link id="current_page" className = "header_text" to="/education">EDUCATION</Link>}
            {this.props.pageNum !== 2 && <Link className = "header_text" to="/projects">PROJECTS</Link>}
            {this.props.pageNum === 2 && <Link id="current_page" className = "header_text" to="/projects">PROJECTS</Link>}
            {this.props.pageNum !== 3 && <Link className = "header_text" to="/experience">EXPERIENCE</Link>}
            {this.props.pageNum === 3 && <Link id="current_page" className = "header_text" to="/experience">EXPERIENCE</Link>}
            {this.props.pageNum !== 4 && <Link className = "header_text" to="/blog">BLOG</Link>}
            {this.props.pageNum === 4 && <Link id="current_page" className = "header_text" to="/blog">BLOG</Link>}
    			</div>
    		</div>
    	</div>
    )
  }
}

export default Header;
