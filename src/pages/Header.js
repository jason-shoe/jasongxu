import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render(){
    return(
      <body class="container">
    		<div class="header">
          {this.props.pageNum != 0 && <a class = "header_text" href="./">JASON XU</a>}
    			{this.props.pageNum == 0 && <a id="current_page" class = "header_text" href="./">JASON XU</a>}
    			<div class = "menu">
    				{this.props.pageNum != 1 && <a class = "header_text" href="./education">EDUCATION</a>}
            {this.props.pageNum == 1 && <a id="current_page" class = "header_text" href="./education">EDUCATION</a>}
            {this.props.pageNum != 2 && <a class = "header_text" href="./projects">PROJECTS</a>}
            {this.props.pageNum == 2 && <a id="current_page" class = "header_text" href="./projects">PROJECTS</a>}
            {this.props.pageNum != 3 && <a class = "header_text" href="./experience">EXPERIENCE</a>}
            {this.props.pageNum == 3 && <a id="current_page" class = "header_text" href="./experience">EXPERIENCE</a>}
            {this.props.pageNum != 4 && <a class = "header_text" href="./blog">BLOG</a>}
            {this.props.pageNum == 4 && <a id="current_page" class = "header_text" href="./blog">BLOG</a>}
    			</div>
    		</div>
    	</body>
    )
  }
}

export default Header;
