import React, { Component } from 'react';

import styles from './Experience.module.css';


class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  experiences: [
				// {
				// 	'image':require("../images/tuftsemblem.png"),
				// 	'name':"Discrete Mathematics Teaching Assistant",
				// 	'date':"September 2020 - Present",
				// 	'description':[
				// 					"",
				// 					"",
				// 					""
				// 				],
				// 	'url':"hi"
				// },
				{
					'image':require("../images/dormify.png"),
					'name':"Dormify - Data Analytics Intern",
					'date':"June 2020 - August 2020",
					'description':[
									"Used Google Analytics, Search Console, and Cloud Platform to measure impact of SEO changes, understand social media reach, and identify changes in customer behavior due to COVID-19.",
									"Designed a web scraper that collected competitor pricing data which aided in competitive pricing analysis as well as product design.",
									"Leveraged BigQuery, JupyterNotebook, and Pandas to fulll daily data requests from Marketing, Product, and Site.",
									"Performed t-tests on various A/B tests to determine if the results were statistically significant"
								],
					'url':"http://dormify.com"
				},
				{
					'image':require("../images/aops.png"),
					'name':"Art of Problem Solving - Grader",
					'date':"February 2020 - September 2020",
					'description':[
									"Held an online, part-time job at Art of Problem Solving, an online school targeted towards middle school and high school students interested in Competitive Mathematics and Programming. ",
									"Graded and provided extensive feedback on Python and Math homework submissions, responded to students' forum posts, and modified other graders' homework feedback before they were released back to students."
								],
					'url':"https://artofproblemsolving.com",
				},
			  	{
					'image':require("../images/tuftsemblem.png"),
					'name':"Center for Cognitive Studies - Office Assistant",
					'date':"September 2019 - Present",
					'description':[
									"Work at a part-time, on-campus job, in the Tufts Center for Cognitive Studies",
									"Assist Program Administrators, Directors, and Post-Docs during my 8 hours in the office during the week.",
									"Spend majority of my time designing graphics and helping organize the yearly Cognitive Studies Conference."
								],
					'url':"https://ase.tufts.edu/cogstud/faculty.html",
				},
				{
					'image':require("../images/blueprint.png"),
					'name':"Blueprint Education - Intern",
					'date':"June 2019",
					'description':[
									"Worked at Blueprint Education, a test preparation and college counseling company in Shanghai, to improve outdated system for tracking student improvement.",
									"Collaborated with Directors and Instructors to aggregate student mock exam data from multiple sources into a single Excel file using Visual Basic.",
									"Created auto-updating score reports that displayed trends regarding location, gender, age, and number of mock exams.",
									"The discovered trends were used for advertising purposes in newsletters."
								],
					'url':"http://www.blueprint.cn.com",
				},
		  ]
		}
	}

  	render(){
		return(
			<div>
				<h1 className="underline">Work Experience</h1>
				<div className={styles.experience}>
					{this.state.experiences.map((element) => 
						<a href={element.url} className={styles.experience_entry}>
							<img className={styles.experience_entry_image} src={element.image} alt =""/>
							<div>
								<p className={styles.experience_entry_header}>{element.name}</p>
								<p className={styles.experience_entry_header} id={styles.date}>{element.date}</p>
								<div className={styles.experience_left_text}>
									<ul>
									{element.description.map((element) => 
										<li>{element}</li>)}
									</ul>
									
								</div>
							</div>
							
						</a>
					)}
				</div>
			</div>
		)
  }
}

export default Experience;
