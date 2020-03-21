import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Education.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Tufts from "../images/tuftsemblem.png"
import SAS from "../images/saslogo.png"



class Education extends Component {
  constructor(props) {
	super(props);
  }

  componentDidMount() {
  }

  render(){
    return(
      <body class="container">
    		<Header pageNum = {1} />
    		<div class="everything">
    			<h1 class="underline">Education</h1>
    			<div class="school_information">
    				<div class="logo_container">
    					<img class="logo" src={Tufts} />
    				</div>
    				<div class="school_description">
    					<p class="school_name">Tufts University</p>
    					<p id="info">Medford, Massachusetts</p>
    					<p id="info">School of Arts and Sciences</p>
    					<p class="italics" id="info">August 2019 - May 2023</p>
    					<p id="info">Unweighted GPA: N/A</p>
    				</div>
    			</div>
    			<div class="school_accomplishments">
    				<div class="tufts" id="coursework">
    					<p id="header">Relevant Coursework</p>
    					<table class="coursework_table">
    						<tr>
    							<th id="course_score">MATH0042</th>
    							<th id="course_name">Calculus III</th>
    						</tr>
    						<tr>
    							<th id="course_score">COMP0011</th>
    							<th id="course_name">Intro to Computer Science</th>
    						</tr>
    						<tr>
    							<th id="course_score">ACL0007</th>
    							<th id="course_name">Conic Sections and Application</th>
    						</tr>
    					</table>
    				</div>
    				<div class="tufts" id="ec">
    					<p id="header">Extracurricular Activities</p>
    					<table class="ec_table">
    						<tr>
    							<th id="ec_name">Jumbocode</th>
    							<th><p id="description">Just-A-Start YouthBuild</p></th>
    						</tr>
    					</table>
    				</div>
    			</div>
          
    			<div class="school_information">
    				<div class="logo_container">
    					<img class="logo" src={SAS} />
    				</div>
    				<div class="school_description">
    					<p class="school_name">Shanghai American School</p>
    					<p id="info">Shanghai, China</p>
    					<p id="info">Pudong Campus</p>
    					<p class="italics" id="info">August 2014 - July 2019</p>
    					<p id="info">Unweighted GPA: 3.90</p>
    				</div>
    			</div>
    			<div class="school_accomplishments">
    				<div class="pd" id="awards">
    					<p id="header">Awards</p>
    					<table class="award_table">
    						<tr>
    							<th id="award_year">2019</th>
    							<th>
    								<p id="award_name">Sir Isaac Newton - Certificate of Distinction</p>
    								<p id="description">Placed first in school, 63rd worldwide out of 2000+
    									 participants on 120 minute long Canadian Physics competition</p>
    							</th>
    						</tr>
    						<tr>
    							<th id="award_year">2019</th>
    							<th>
    								<p id="award_name">Purple Comet - 1st Place Team in China</p>
    								<p id="description">90 minute team competition administered at school, worldwide
    									 Honorable Mention</p>
    							</th>
    						</tr>
    						<tr>
    							<th id="award_year">2019</th>
    							<th>
    								<p id="award_name">The Aspiring Nobel Prize Award</p>
    								<p id="description">End-of-year school science award given to three seniors</p>
    							</th>
    						</tr>
    						<tr>
    							<th id="award_year">2019</th>
    							<th>
    								<p id="award_name">The Excellence in Math Award</p>
    								<p id="description">End-of-year school award given to two students per grade </p>
    							</th>
    						</tr>
    						<tr>
    							<th id="award_year">2018</th>
    							<th>
    								<p id="award_name">National Merit Finalist</p>
    								<p id="description">1500 on PSAT</p>
    							</th>
    						</tr>
    						<tr>
    							<th id="award_year">2018</th>
    							<th>
    								<p id="award_name">Artificial Intelligence Award</p>
    								<p id="description">End-of-year school award given to a Computer Science A student</p>
    							</th>
    						</tr>
    						<tr>
    							<th id="award_year">2018</th>
    							<th>
    								<p id="award_name">ASDAN Math Tournament - 2nd Place Team</p>
    								<p id="description">Travelled to Beijing and placed 2nd overall out of 80+ teams in China (640+ people)</p>
    							</th>
    						</tr>
    					</table>
    				</div>

    				<div class="pd">
    					<div id="ec">
    						<p id="header">Extracurricular Activities</p>
    						<table class="ec_table">
    							<tr>
    								<th id="ec_name">Math Club President</th>
    								<th><p id="description">Organized practice sets, taught problem
    																				solving strategies, and organized Pi Week:
    																				a week of original math activities for all
    																				students with pie prizes.</p></th>
    							</tr>
    							<tr>
    								<th id="ec_name">Link Crew Leader</th>
    								<th id="description">Applied and was chosen as one of 30 leaders.
    																		 Helped freshman transition into high school
    																		 by leading and advising my group of 8
    																		 throughout the year.</th>
    							</tr>
    							<tr>
    								<th id="ec_name">Varsity Basketball Manager</th>
    								<th id="description"><p>Responsible for creating
    																				statistics-tracking spreadsheets, attending
    																				games and preparing game reports.</p></th>
    							</tr>
    							<tr>
    								<th id="ec_name"></th>
    								<th id="description"></th>
    							</tr>
    							<tr>
    								<th id="ec_name"></th>
    								<th id="description"></th>
    							</tr>
    						</table>
    					</div>
    					<div id="coursework">
    						<p id="header">Relevant Coursework</p>
    						<table class="coursework_table">
    							<tr>
    								<th id="course_name">IB Higher Level Mathematics</th>
    								<th id="course_score">7 out of 7</th>
    							</tr>
    							<tr>
    								<th id="course_name">IB Standard Level English A</th>
    								<th id="course_score">6 out of 7</th>
    							</tr>
    							<tr>
    								<th id="course_name">AP Physics C Mechanics</th>
    								<th id="course_score">5 out of 5</th>
    							</tr>
    							<tr>
    								<th id="course_name">AP Physics C Electricity And Magnetism</th>
    								<th id="course_score">5 out of 5</th>
    							</tr>
    							<tr>
    								<th id="course_name">AP Physics Computer Science A</th>
    								<th id="course_score">5 out of 5</th>
    							</tr>
    							<tr>
    								<th id="course_name">AP Microeconomics</th>
    								<th id="course_score">5 out of 5</th>
    							</tr>
    							<tr>
    								<th id="course_name">AP Macroeconomics</th>
    								<th id="course_score">5 out of 5</th>
    							</tr>
    							<tr>
    								<th id="course_name">AP Psychology</th>
    								<th id="course_score">5 out of 5</th>
    							</tr>
    						</table>
    					</div>
    				</div>
    			</div>
    	  </div>

    		<Footer />

    	</body>
    )
  }
}

export default Education;
