import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Experience.css';
import Header from './Header.js';
import Footer from './Footer.js';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render(){
    return(
    <body class="container">
  		<Header pageNum = {3} />

  		<div class="everything">
  			<div class="experience">
  				<h1 class="underline">Work Experience</h1>
  				<div class="work_experience" id="top">
  					<p class="experience_entry_header">Center for Cognitive Studies - Office Assistant</p>
  					<p class="experience_entry_header" id="date">September 2019 - Present</p>
  					<div class="experience_entry">
  						<div class="experience_left_text">
  							<p>Through the academic year, I work an on campus job in the Center for Cognitive Studies. The majority of my time is
  								 spent designing posters, nametags, and other necessary graphics
  								 for a Cognitive Studies conference in April. In addition, I perform
  								 small chores around the office to assist the program Administator,
  								 Directors, and Post-Docs. I work 8 hours a week during the year.</p>
  						</div>
  						<div class="experience_right_text">
  							<a class="website_button"href="https://ase.tufts.edu/cogstud/faculty.html">Department Website</a>
  						</div>
  					</div>
  				</div>


  				<div class="work_experience">
  					<p class="experience_entry_header">Blueprint Education - Intern</p>
  					<p class="experience_entry_header" id="date">June 2019</p>
  					<div class="experience_entry">
  						<div class="experience_left_text">
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
  						<div class="experience_right_text">
  							<a class="website_button" href="http://www.blueprint.cn.com">Blueprint Website</a>
  						</div>
  					</div>
  				</div>


  				<div class="work_experience">
  					<p class="experience_entry_header">Advanced Pre-Calculus - Private Tutor</p>
  					<p class="experience_entry_header" id="date">August 2017 - July 2018</p>
  					<div class="experience_entry">
  						<div class="experience_left_text">
  							<p>I private tutored Advanced Pre-Calculus every Sunday and Wednesday
  								 throughout my Junior year and summer. I taught each lesson, answered
  								 questions about the homework, and created new problem sets.</p>
  						</div>
  					</div>
  				</div>
  				<p class="experience_header">SKILLS</p>
  				<p class="language_header">Proficiency In</p>
  				<div class="all_languages">
  					<div class="language_image_and_text">
  						<img src="/images/languages/c++.png" class="language_image"/>
  						<p class="language_label">C++</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/java.png" class="language_image"/>
  						<p class="language_label">Java</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/python.png" class="language_image"/>
  						<p class="language_label">Python</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/html.png" class="language_image"/>
  						<p class="language_label">HTML</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/css.png" class="language_image"/>
  						<p class="language_label">CSS</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/vba.png" class="language_image"/>
  						<p class="language_label">VBA</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/javascript.png" class="language_image"/>
  						<p class="language_label">Javascript</p>
  					</div>
  				</div>
  				<p class="language_header">Understanding In</p>
  				<div class="all_languages">
  					<div class="language_image_and_text">
  						<img src="/images/languages/matlab.png" class="language_image"/>
  						<p class="language_label">Matlab</p>
  					</div>
  					<div class="language_image_and_text">
  						<img src="/images/languages/latex.png" class="language_image"/>
  						<p class="language_label">Latex</p>
  					</div>
  				</div>
  			</div>
  		</div>

  		<Footer />

  	</body>
    )
  }
}

export default Experience;
