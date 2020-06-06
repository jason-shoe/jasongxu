import React, { Component } from 'react';

import './2Education.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tufts from "../images/tuftsemblem.png"
import SAS from "../images/saslogo.png"



class Education extends Component {
  render(){
    return(
      <div className="container">
    		<Header pageNum = {1} />
    		<div className="body" id ="transition">
    			<h1 className="underline">Education</h1>
    			<div className="school_information">
    				<div className="logo_container">
    					<img className="logo" src={Tufts} alt=""/>
    				</div>
    				<div className="school_description">
    					<p className="school_name">Tufts University</p>
    					<p id="info">Medford, Massachusetts</p>
    					<p id="info">School of Arts and Sciences</p>
    					<p className="italics" id="info">August 2019 - May 2023</p>
    				</div>
    			</div>
    			<div className="school_accomplishments">
    				<div className="tufts" id="coursework">
    					<p id="header">Relevant Coursework</p>
    					<table className="coursework_table">
    						<tbody>
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
							</tbody>
    					</table>
    				</div>
    				<div className="tufts" id="ec">
    					<p id="header">Extracurricular Activities</p>
    					<table className="ec_table">
							<tbody>
								<tr>
									<th id="ec_name">Jumbocode</th>
									<th><p id="description">Just-A-Start YouthBuild</p></th>
								</tr>
							</tbody>
    					</table>
    				</div>
    			</div>
          
    			<div className="school_information">
    				<div className="logo_container">
    					<img className="logo" src={SAS} alt=""/>
    				</div>
    				<div className="school_description">
    					<p className="school_name">Shanghai American School</p>
    					<p id="info">Shanghai, China</p>
    					<p id="info">Pudong Campus</p>
    					<p className="italics" id="info">August 2014 - July 2019</p>
    				</div>
    			</div>
    			<div className="school_accomplishments">
    				<div className="pd" id="awards">
    					<p id="header">Awards</p>
    					<table className="award_table">
    						<tbody>
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
							</tbody>
    					</table>
    				</div>

    				<div className="pd">
    					<div id="ec">
    						<p id="header">Extracurricular Activities</p>
    						<table className="ec_table">
								<tbody>
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

								</tbody>
    						</table>
    					</div>
    					<div id="coursework">
    						<p id="header">Relevant Coursework</p>
    						<table className="coursework_table">
								<tbody>
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
								</tbody>
    						</table>
    					</div>
    				</div>
    			</div>
    	  </div>

    	<Footer />

    	</div>
    )
  }
}

export default Education;
