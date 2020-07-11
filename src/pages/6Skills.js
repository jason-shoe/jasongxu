import React, { Component } from 'react';

import './Main.css'
import styles from './Skills.module.css';

import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  languages: [
				{language: 'Python', rating:5},
				{language: 'C++', rating:4},
				{language: 'SQL/BigQuery', rating:4},
				{language: 'HTML', rating:4},
				{language: 'CSS', rating:4},
				{language: 'VBA', rating:3},
				{language: 'JavaScript', rating:3},
				{language: 'Java', rating:3}
		  ],
		  skills: [
				{skill:'Pandas', alt:'', rating: 5},
				{skill:'Webscraping',alt:'BeautifulSoup, Selenium, Scrapy', rating: 5},
				{skill:'Data Visualization',alt:'D3.js, Matplotlib, Seaborn', rating: 4},
				{skill:'Machine Learning',alt:'Scikit Learn', rating: 4},
				{skill:'React.JS',alt:'', rating: 4},
				{skill:'Version Control',alt:'Github and Heroku', rating: 3},
				{skill:'Flask',alt:'', rating: 3},

		  ]
		}
	}

  	render(){
		return(
			<div>
                <h1 className="underline">Skills</h1>
				<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
					<div style={{width:'45%', display: 'flex',flexFlow:'column'}}>
						<div style={{flex: '0 1 auto'}}>
							<p className={styles.skills_label}>Languages</p>
						</div>
						<div style={{flex: '1 1 auto'}}>
							<table id={styles.smaller_table} className={styles.skills_table}>
								<tbody>
									{this.state.languages.map((element) => 
										<tr>
											<th style={{textAlign:'left'}}>{element.language}</th>
											
											<th style={{textAlign:'right'}}>{[...Array(element.rating).keys()].map((element) => <FaStar className={styles.star}/>)}
																{[...Array(5 - element.rating).keys()].map((element) => <FaRegStar className={styles.star}/>)}</th>
										</tr>)}
								</tbody>
							</table>
						</div>
					</div>
					<div style={{width:'45%', display: 'flex',flexDirection:'column'}}>
						<p className = {styles.skills_label}>Technical Skills</p>
						<table className={styles.skills_table}>
							<tbody>
								{this.state.skills.map((element) => 
									<tr>
										<th style={{textAlign:'left'}}>
											<div>
												<p class={styles.skill}>{element.skill}</p>
												<p id={styles.altText}>{element.alt}</p>
											</div>
										</th>
										
										<th style={{textAlign:'right'}}>{[...Array(element.rating).keys()].map((element) => <FaStar className={styles.star}/>)}
															{[...Array(5 - element.rating).keys()].map((element) => <FaRegStar className={styles.star}/>)}</th>
									</tr>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
  }
}

export default Skills;
