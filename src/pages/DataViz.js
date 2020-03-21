import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DataViz.css';
import Header from './Header.js';
import Footer from './Footer.js';

class DataViz extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render(){
    return(
      <body class="container">
    		<Header pageNum = {4} />

    		<div class="everything">
    			<div class="experience">
    				<p class="experience_header">DATA VISUALIZATION WORK</p>
    				<p>I recently learned D3.js, a JavaScript data visualization library. Here are a few of the charts
    				 	 that I have made as practice. All of the basketball data was obtained through Web Scraping using both
    				   Selenium and BeautifulSoup in Python. Note that the objective was to practice data visualization techniques,
    				 	 not to obtain meaningful conclusions from the data and charts. All the Web Scraping and data formatting
    				 	 can be found on <a href="https://github.com/jason-shoe/BasketballAnalytics">GitHub</a>.</p>
    			 <div class="container">
    			 		<h1 class="project_header">Dallas Mavericks Projected Win Percentage Distribution</h1>
    				 	<div class="containerrow">
    						<div id="area3"></div>
    						<p id="description_project">For this portion of the project I used Python to Web Scrape <a href="https://projects.fivethirtyeight.com/2019-nba-predictions/games/">FiveThirtyEight's 2018-19 NBA Predictions</a>
    							 . Since all the data is not shown initially, I had to use Selenium to create a simulator and interact with the page. I stored the game predictions in an Excel file and
    							 later connected it to my existing data set. Using DS.js I was then able to make the appropriate bar graph. The data for this graph can be downloaded <a href="data/dallasprobability.csv">here</a>.</p>
    					</div>
    					<h1 class="project_header">2018-19 Win Projection Accuracy</h1>
    					<div class="containerrow">
    						<div id="area1"></div>
    						<p id="description_project">I continued to use the same data set as the above chart.
    							I discovered that FiveThirtyEight did a very similar <a href="https://projects.fivethirtyeight.com/checking-our-work/nba-games/">investigation</a> alredy after I finished the scatter plot.</p>
    					</div>
    					<h1 class="project_header">First 10 Games vs Last 10 Games</h1>
    					<div class="containerrow">
    						<div id="area2"></div>
    						<p id="description_project">Here I scraped <a href="https://www.basketball-reference.com/boxscores/?month=10&day=16&year=2018">Basketball Reference</a> for their statistics
    							 on every game of the 2018-19 season. I used BeautifulSoup as it was more time efficient. I stored all the game scores in Excel files that can be downloaded <a href="data/rawdata/">here</a>.
    							 I then used Pandas to organize the data in DataFrames sorted by games, players, and teams. Players who met the critera of at least 20 games were then
    							 plotted on the Parallel Coordinates Chart.</p>
    					</div>

    				</div>
    			</div>
    		</div>








    		<Footer />

    	</body>
    )
  }
}

export default DataViz;
