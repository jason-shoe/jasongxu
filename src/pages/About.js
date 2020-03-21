import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './About.css';
import './Main.css';
import Header from './Header.js';
import Footer from './Footer.js';
import ProfilePic from "../images/profile.jpeg"
import { FaFilePdf } from 'react-icons/fa';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    }
  }

  componentDidMount() {
  }
  
  changeColor(){
    if(this.state.color == 'black'){
      this.state.color = '#EA5455';
    }else{
      this.state.color = 'black';
    }
    this.forceUpdate();
  }

  render(){
    return(
      <body>
        <Header pageNum = {0} />

  	    <div class="profile">
  				<div class="top">
            <div class="information_div">
              <p class="big_name">Hi, my name is Jason.</p>
              <p id = "transition" class="medium_text">Tufts University '23</p>
              <p id = "transition" class="phone_number">(781) 827 9263</p>
              <p id = "transition">I'm a freshman at Tufts University in the School of Arts and Sciences
                 and this is my personal website. I plan on double majoring in Mathematics and Computer
                 Science. I was born in 2001 in Covington, Virginia and have
                 since lived in Ohio, Texas, Hong Kong, Shanghai, and now Massachusetts.</p>
              <p id = "transition">Ever since a young age, I've been passionate about programming.
                 This website is meant to showcase some of my recent work. Here
                 I have compiled together all my personal projects, education information,
                 work experience, and much more.</p>
              <p id = "transition">If you would like to take a look at my resume, you can download it
                 with the button below.</p>
              <div id = "transition" class="bio_resume">
                <a href="/images/jxuResume.pdf" download="jxuResume.pdf"><FaFilePdf onMouseEnter = {() => this.changeColor()} onMouseLeave = {() => this.changeColor()} color={this.state.color} size="2em"/></a>
                <p class="resume_label">Resume</p>
              </div>
            </div>
            <div id = "transition" class="picture_div">
              <img src = {ProfilePic} id="main_photo"></img>
            </div>
          
  				</div>
  	    </div>
    		<Footer />
    	</body>
    )
  }
}

export default About;
