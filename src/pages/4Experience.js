import React, { Component } from 'react';

import './4Experience.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import cpp from '../images/languages/c++.png'
import java from '../images/languages/java.png'
import python from '../images/languages/python.png'
import html from '../images/languages/html.png'
import css from '../images/languages/css.png'
import vba from '../images/languages/vba.png'
import javascript from '../images/languages/javascript.png'
import matlab from '../images/languages/matlab.png'
import latex from '../images/languages/latex.png'


class Experience extends Component {

  render(){
    return(
    <div className="container">
  		<Header pageNum = {3} />

  		<div className="everything" id="transition">
  			<div className="experience">
  				<h1 className="underline">Work Experience</h1>
  				<div className="work_experience" id="top">
  					<p className="experience_entry_header">Center for Cognitive Studies - Office Assistant</p>
  					<p className="experience_entry_header" id="date">September 2019 - Present</p>
  					<div className="experience_entry">
  						<div className="experience_left_text">
  							<p>Through the academic year, I work an on campus job in the Center for Cognitive Studies. The majority of my time is
  								 spent designing posters, nametags, and other necessary graphics
  								 for a Cognitive Studies conference in April. In addition, I perform
  								 small chores around the office to assist the program Administator,
  								 Directors, and Post-Docs. I work 8 hours a week during the year.</p>
  						</div>
  						<div className="experience_right_text">
  							<a className="website_button"href="https://ase.tufts.edu/cogstud/faculty.html">Department Website</a>
  						</div>
  					</div>
  				</div>


  				<div className="work_experience">
  					<p className="experience_entry_header">Blueprint Education - Intern</p>
  					<p className="experience_entry_header" id="date">June 2019</p>
  					<div className="experience_entry">
  						<div className="experience_left_text">
  							<p>I spent the summer before college interning for Blueprint Education,
  								 a test preparation and college counseling company based in Shanghai.
  								 I was tasked with improving the outdated database for the mock exam
  								 scores for all their students. I automated the importing of over 2000+
  								 scores from previous students into Excel using Visual Basic. After
  								 gathering the data, I created auto-updating score reports that took in critera
  								 such as a student's test-preparation location, number of mocks, gender, and age.
  								 The score improvement trends that I found
  								 were then used for advertising purposes.</p>
  						</div>
  						<div className="experience_right_text">
  							<a className="website_button" href="http://www.blueprint.cn.com">Blueprint Website</a>
  						</div>
  					</div>
  				</div>


  				<div className="work_experience">
  					<p className="experience_entry_header">Advanced Pre-Calculus - Private Tutor</p>
  					<p className="experience_entry_header" id="date">August 2017 - July 2018</p>
  					<div className="experience_entry">
  						<div className="experience_left_text">
  							<p>I private tutored Advanced Pre-Calculus every Sunday and Wednesday
  								 throughout my Junior year and summer. I taught each lesson, answered
  								 questions about the homework, and created new problem sets.</p>
  						</div>
  					</div>
  				</div>
  				<h1 className="underline">Skills</h1>
  				<p className="language_header">Proficiency In</p>
  				<div className="all_languages">
  					<div className="language_image_and_text">
  						<img src={cpp} className="language_image" alt=""/>
  						<p className="language_label">C++</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={java} className="language_image" alt=""/>
  						<p className="language_label">Java</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={python} className="language_image" alt=""/>
  						<p className="language_label">Python</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={html} className="language_image" alt=""/>
  						<p className="language_label">HTML</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={css} className="language_image" alt=""/>
  						<p className="language_label">CSS</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={vba} className="language_image" alt=""/>
  						<p className="language_label">VBA</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={javascript} className="language_image" alt=""/>
  						<p className="language_label">Javascript</p>
  					</div>
  				</div>
  				<p className="language_header">Understanding In</p>
  				<div className="all_languages">
  					<div className="language_image_and_text">
  						<img src={matlab} className="language_image" alt=""/>
  						<p className="language_label">Matlab</p>
  					</div>
  					<div className="language_image_and_text">
  						<img src={latex} className="language_image" alt=""/>
  						<p className="language_label">Latex</p>
  					</div>
  				</div>
  			</div>
  		</div>

  		<Footer />

  	</div>
    )
  }
}

export default Experience;
