import React, { Component } from 'react';

import styles from './Education.module.css';

class Education extends Component {
  render(){
    return(
      	<div className={styles.container}>
    		<div className={styles.body} >
    			<h1 className="underline">Education</h1>
    			
				<div className={styles.school_accomplishments}>
					<div className = {styles.course_work}>
						<div className={styles.school_information}>
							<img className={styles.logo} src={require("../images/tuftsemblem.png")} alt=""/>
							<div className={styles.school_description}>
								<p className={styles.school_name}>Tufts University</p>
								<p id={styles.info}>Medford, Massachusetts</p>
								<p id={styles.info}>School of Arts and Sciences</p>
								<p className={styles.italics} id={styles.info}>August 2019 - May 2023</p>
							</div>
						</div>
					</div>


					<div className={styles.course_work}>
						<p id={styles.header}>Relevant Coursework</p>
						<table className={styles.coursework_table}>
							<tbody>
								<tr>
									<th id={styles.course_score}>MATH0042</th>
									<th id={styles.course_name}>Calculus III</th>
								</tr>
								<tr>
									<th id={styles.course_score}>COMP0011</th>
									<th id={styles.course_name}>Intro to Computer Science</th>
								</tr>
								<tr>
									<th id={styles.course_score}>COMP0015</th>
									<th id={styles.course_name}>Data Structures</th>
								</tr>
								<tr>
									<th id={styles.course_score}>MATH0061</th>
									<th id={styles.course_name}>Discrete Mathematics</th>
								</tr>
								<tr>
									<th id={styles.course_score}>MATH0070</th>
									<th id={styles.course_name}>Linear Algebra</th>
								</tr>
							</tbody>
						</table>
    				</div>
				</div>
    			<div className={styles.school_accomplishments}>
    				<div className={styles.course_work}>
						<div className={styles.school_information}>
							<img className={styles.logo} src={require("../images/saslogo.png")} alt=""/>
							<div className={styles.school_description}>
								<p className={styles.school_name}>Shanghai American School</p>
								<p id={styles.info}>Shanghai, China</p>
								<p id={styles.info}>Pudong Campus</p>
								<p className={styles.italics} id={styles.info}>August 2014 - July 2019</p>
							</div>
						</div>
						
    					<div id={styles.ec}>
    						<p id={styles.header}>Extracurricular Activities</p>
    						<table className={styles.ec_table}>
								<tbody>
									<tr>
										<th id={styles.ec_name}>Math Club President</th>
										<th><p id={styles.description}>Organized practice sets, taught problem
																						solving strategies, and organized Pi Week:
																						a week of original math activities for all
																						students with pie prizes.</p></th>
									</tr>
									<tr>
										<th id={styles.ec_name}>Link Crew Leader</th>
										<th id={styles.description}>Applied and was chosen as one of 30 leaders.
																				Helped freshman transition into high school
																				by leading and advising my group of 8
																				throughout the year.</th>
									</tr>
									<tr>
										<th id={styles.ec_name}>Varsity Basketball Manager</th>
										<th id={styles.description}><p>Responsible for creating
																		statistics-tracking spreadsheets, attending
																		games and preparing game reports.</p></th>
									</tr>
								</tbody>
    						</table>
    					</div>
    				</div>

    				<div className={styles.course_work}>
						<div>
							<p id={styles.header}>Awards</p>
							<table className={styles.award_table}>
								<tbody>
									<tr>
										<th id={styles.award_year}>2019</th>
										<th>
											<p id={styles.award_name}>Purple Comet - 1st Place Team in China</p>
											<p id={styles.description}>90 minute team competition administered at school, worldwide
												Honorable Mention</p>
										</th>
									</tr>
									<tr>
										<th id={styles.award_year}>2018</th>
										<th>
											<p id={styles.award_name}>National Merit Finalist</p>
											<p id={styles.description}>1500 on PSAT</p>
										</th>
									</tr>
									<tr>
										<th id={styles.award_year}>2018</th>
										<th>
											<p id={styles.award_name}>ASDAN Math Tournament - 2nd Place Team</p>
											<p id={styles.description}>Travelled to Beijing and placed 2nd overall out of 80+ teams in China (640+ people)</p>
										</th>
									</tr>
								</tbody>
							</table>
						</div>
    					<div id={styles.coursework}>
    						<p id={styles.header}>Relevant Coursework</p>
    						<table className={styles.coursework_table}>
								<tbody>
									<tr>
										<th id={styles.course_name}>IB Higher Level Mathematics</th>
										<th id={styles.course_score}>7 out of 7</th>
									</tr>
									<tr>
										<th id={styles.course_name}>IB Standard Level English A</th>
										<th id={styles.course_score}>6 out of 7</th>
									</tr>
									<tr>
										<th id={styles.course_name}>AP Physics C Mechanics</th>
										<th id={styles.course_score}>5 out of 5</th>
									</tr>
									<tr>
										<th id={styles.course_name}>AP Physics C Electricity And Magnetism</th>
										<th id={styles.course_score}>5 out of 5</th>
									</tr>
									<tr>
										<th id={styles.course_name}>AP Physics Computer Science A</th>
										<th id={styles.course_score}>5 out of 5</th>
									</tr>
									<tr>
										<th id={styles.course_name}>AP Microeconomics</th>
										<th id={styles.course_score}>5 out of 5</th>
									</tr>
									<tr>
										<th id={styles.course_name}>AP Macroeconomics</th>
										<th id={styles.course_score}>5 out of 5</th>
									</tr>
									<tr>
										<th id={styles.course_name}>AP Psychology</th>
										<th id={styles.course_score}>5 out of 5</th>
									</tr>
								</tbody>
    						</table>
    					</div>
    				</div>
    			</div>
    	  </div>
    	</div>
    )
  }
}

export default Education;
