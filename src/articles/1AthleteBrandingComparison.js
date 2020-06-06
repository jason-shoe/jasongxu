import React, { Component } from 'react';

import './Articles.css';
import Header from '../pages/components/Header.js';
import Footer from '../pages/components/Footer.js';
import Highlight from 'react-highlight'
import './1atom-one-light.scss'
import './1AthleteBrandingComparison.css';

import MathJax from 'react-mathjax';

import { FaFileExcel } from 'react-icons/fa';

import ArticleImage from "../images/blog/nbavsnflcropped.png";
import ScatterPlot from "./graphs1/1ScatterPlot.js"
import NBAdata from './graphs1/1NBAScatterPlot.csv';
import NFLdata from './graphs1/1NFLScatterPlot.csv';
import SalaryLorenz from './graphs1/1SalaryLorenz.png';
import FollowerLorenz from './graphs1/1FollowerLorenz.png';
import YearlyGrowth from './graphs1/1YearlyGrowth.png';

    
class AthleteBrandingComparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ['black','black']
    }
  }
  componentDidMount(){
  }
  

  render(){
    return(
    <div className="container">
  		<Header pageNum = {5} />
      <MathJax.Provider>
  		<div className="everything">
        <h1 id="article-title">Athlete Branding Comparision 
                              <br /> (NBA vs NFL)</h1>
        <img className = "article-image" src={ArticleImage} alt=""/>
        <div className="article-content">
          <p>I've been a fan of the NBA for almost my entire life, absorbing all the basketball-related
             content I could get my hands on. I've repeatedly listened to players, commentators, and any notable media
             personalities mention the phrase "building a brand". I've been under the impression that the NBA  
             is the most player-driven league in the world. Players are not only recognized by their incredible
             on-the-court performances, but also the immense amount of influence players have off-the-court.
             Whether it be voicing their opinions on current events or talking about deeply personal mental 
             health issues, NBA players have been known to make great use of their platforms.</p>
          <p>What I wanted to investigate was <strong>how "building a brand" differs for players in different leagues? </strong>
             Do players in the NBA really have brands that are larger and faster growing than those in the NFL?</p>
          <h2>What does "building a brand" mean?</h2>
          <p>How I quantified how big a player's brand is was by their Instagram follower count. Instagram is how most
             athletes connect with their followers, and thus I used this as my primary metric.</p>
          <h2>Data Collection</h2>
          <p>Most of the webscraping was done using Beautiful Soup on ESPN, basketball-reference, and football-reference.
             Two interesting aspects of the webscraping process were retrieving Instagram handles and follower counts, which was collected on
             March 19, 2020.</p>
          <p>To get a player's Instagram handles, I googled the player's name along with "Instagram NBA" or "Instagram NFL" and retrieved
             the first result.</p>
          <Highlight className='Python'>
          {"from bs4 import BeautifulSoup"}<br/>
          {"import re"}<br/>
          {"import pandas as pd "}<br/>
          {"import requests"}<br/>
          {""}<br/>
          {"for i in range(len(players)):"}<br/>
          {"    if(players.loc[i,'instagram']==''):"}<br/>
          {"        split_name = players.loc[i, 'name'].split()"}<br/>
          {"        namelink = ''"}<br/>
          {"        for x in range(len(split_name)):"}<br/>
          {"            namelink += split_name[x] + '+'"}<br/>
          {"        namelink = 'https://www.google.com/search?q='+namelink+'instagram'"}<br/>
          {"        google_link = requests.get(namelink)"}<br/>
          {"        google_soup = BeautifulSoup(google_link.text, 'html.parser')"}<br/>
          {"        players.loc[i, 'instagram'] = google_soup.findAll('div')[27].text"}<br/>
          {"        print(100*i/len(players),players.loc[i, 'instagram'])"}
          </Highlight>
             
          <p>To get the Instagram follower count, I used this code snippet from <a href="https://stackoverflow.com/questions/52225334/webscraping-instagram-follower-count-beautifulsoup">Stack Overflow</a> to
             do this.</p>
          <Highlight className='Python'>
            {"import json"}<br/>
            {"import re"}<br/>
            {"import requests"}<br/>
            {""}<br/>
            {"select = ['salary','careerGP','followerCount']"}<br/>
            {"for x in range(len(nba)):"}<br/>
            {"    handle = nba.loc[x, 'instagramHandle']"}<br/>
            {"    response = requests.get('https://www.instagram.com/' + handle)"}<br/>
            {"    try:"}<br/>
            {"        json_match = re.search(r'window._sharedData = (.*);</script>', response.text)"}<br/>
            {"        profile_json = json.loads(json_match.group(1))['entry_data']['ProfilePage'][0]['graphql']['user']"}<br/>
            {"        nba.loc[x, 'followerCount'] = profile_json['edge_followed_by']['count']"}<br/>
            {"    except:"}<br/>
            {"        print('ERROR')"}<br/>
          </Highlight>
          <p>The collected data of NBA/NFL player names, photos, basic stats, Instagram handles, and more can be downloaded
             with the two following buttons</p>
          <div id = "transition" className="bio_resume">
            <a href={NBAdata} download={NBAdata}><FaFileExcel color={this.state.color[0]} size="2em"/></a>
            <p className="resume_label">NBA Data</p>
          </div>
          <div id = "transition" className="bio_resume">
            <a href={NFLdata} download={NFLdata}><FaFileExcel color={this.state.color[1]} size="2em"/></a>
            <p className="resume_label">NFL Data</p>
            
          </div>
          <h2>Data Visualization</h2>
          <p>I first just plotted the collected data on scatter plots to see if any trends
             are immedietely apparent.</p>
          <div className="scatter-plot-graphs">
            <ScatterPlot data={NBAdata} title="NBA" div="nba-salary-followers" 
                                  maxsalary={40} maxfollowers={30} strokecolor="#C9082A" insidecolor="#ed9a79"
                                  salaryindex={4} followerindex={10}/>
            <ScatterPlot data={NFLdata} title="NFL" div="nfl-salary-followers" 
                                  maxsalary={40} maxfollowers={30} strokecolor="#17408B" insidecolor="#658cd4"
                                  salaryindex={4} followerindex={9}/>
          </div>
          <p>Note that Lebron James (61.6m followers)  is not displayed on the scatter plot. Some initial observations
             are that the NFL salaries are much more concentrated at the bottom. After looking into this, I realized
             the data that I had scraped was of <strong>guaranteed</strong> money. NFL contracts often have large
             bonuses and incentives. Because of this, I decided not to use salaries as an independent variable for
             comparison between the two leagues.</p>
          <p>However, what I did want to look into was how the "wealth" was distributed in the two leagues. I investigated
             how the salary distribution in the leagues corresponded with the distribution of followers.</p>
          <div className="lorenz-description-div">
            <div className="lorenz-div">
              <p id="lorenz-header">Salary Distribution</p>
              <img className="lorenz-curve" src = {SalaryLorenz} alt=""/>
              <p id="lorenz-header">Follower Distribution</p>
              <img className="lorenz-curve" src = {FollowerLorenz} alt=""/>
            </div>
            <p>I used a Lorenz Curve to visualize the distribution of wealth. The curve illustrates what percentage
               of the total salary/followers that the bottom <MathJax.Node inline formula={'x\\%'} /> of the population account for. A perfectly evenly distributed
               population is represented by the diagonal black line.</p>
            <p>I first sorted the players' salaries/follower counts in ascending order, and then plotted each percentile
               of the population onto a graph and fitted it with a curve. For each of the curves, we can calculate the
               Gini Coefficient, which measures how well distributed the salaries/follower counts are.</p>
            <p>If the Lorenz Curve is represented by the function <MathJax.Node inline formula={'f(x)'} /> on 
               the domain <MathJax.Node inline formula={'[0,1]'} />, then the Gini Coefficient can be calculated with the following
               formula.</p>
            <MathJax.Node formula={`G = \\frac{\\int_{0}^1 f(x)dx}{\\int_{0}^1 xdx}`} />
            <p>Gini Coefficients are on a scale of 0 to 1, with 1 occuring when wealth is perfectly evenly distributed.
               The following table shows the 4 different Gini Coefficients for the Lorenz Curves.</p>
            <table class="gini-coefficient">
               <tbody>
                  <tr>
                     <th></th>
                     <th>NBA</th> 
                     <th>NFL</th>
                  </tr>
                  <tr>
                     <th>Salary</th>
                     <td>0.439</td>
                     <td>0.442</td>
                  </tr>
                  <tr>
                     <th>Follower</th>
                     <td>0.176</td>
                     <td>0.227</td>
                  </tr>
               </tbody>
              
            </table>
            <p>We see that the distribution of salaries in both leagues is almost identically distributed. However, 
               the NBA's followers are less evenly distributed than the NFL. This promotes the idea that the NBA
               is the more superstar driven league.</p>
          </div>
          <p>And lastly, the final trend that I wanted to investigate was the relationship between when a player was drafted
             and the number of followers. What I wanted to look for was how quickly a player's Instagram following grew
             with time. The left scatter plot shows the average number of followers for the active players in each draft class.
             The right scatter plot shows the annual percent growth in Instagram following. This was created under
             the assumption that different draft classes have similar Instagram usage behavior as well as no increase in Instagram's total user count.</p>
          <div className="row-flex">
            <div className="yearly-growth-div">
              <p id = "yearly-growth-header-one">Follower Count by Draft Class</p>
              <p id = "yearly-growth-header-two">Follower Count Growth by Years</p>
            </div>
          </div>
          <img className="yearly-growth-image"src={YearlyGrowth} alt=""/>
          <h2>Findings</h2>
          <p>As I initially thought, the NBA is a more superstar driven league than the NFL. Looking at both the
             Lorenz Curve of followers and Follower Count by Draft Class of the NBA, it is clear that superstars
             dominate the NBA's brand recognition and social media presence.</p>
          <p>However, surprisingly the NFL fosters faster growth in player brands among the <strong>average </strong>
             athlete. After the average NFL career length <a href="https://www.statista.com/statistics/240102/average-player-career-length-in-the-national-football-league/">(3.3 years)</a>
             , an NFL athlete's Instagram following increases by 180.6%. On the other hand, an NBA player over an average
             career length of <a href="https://www.nba.com/nuggets/features/junior_bridgeman_20100610.html">4.5 years</a> only 
             grows by 173.5%.</p>
          <p>Despite longer careers, larger salaries, and a smaller pool of athletes, the average NBA player
             experiences a slightly smaller increase in their brand awareness, shown by Instagram follower data. My prior
             belief that the NBA is better at creating social media followings for players than the NFL appears to have been
             false. Even though NBA players enter the league with larger followings, the NFL has allowed for comparable, if not 
             larger, athlete brand <strong>percent</strong> growth for the average player.</p>
        </div>
  		</div>
      </MathJax.Provider>
  		<Footer />

  	</div>
    )
  }
}

export default AthleteBrandingComparison;
