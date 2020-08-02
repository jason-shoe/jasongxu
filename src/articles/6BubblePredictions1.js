import React, { Component } from 'react';

import './Articles.css';
import './4SpotifySentiment.css';
import Header from '../pages/components/Header.js';
import Footer from '../pages/components/Footer.js';
import Highlight from 'react-highlight'


import MathJax from 'react-mathjax';

import ArticleImage from "./graphs4/spotify.png";

import styles from './SpotifyGenre.module.css'


    
class BubblePredictions1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNum: 0,
            color: ['black','black'],
            dataOne: [],
            
        }
        this.child = React.createRef();
    }
    

    componentDidMount(){
    }
    render(){
        return(
        <body class="container">
            <Header pageNum = {5} />
            <MathJax.Provider>
                <div class="everything">
                    <h1 id="article-title">Mavericks vs Rockets <br /> Bubble Predictions Part 1</h1>
                    <img class = "article-image" src={require('./6bubblepredictions1/0main.jpg')} alt=""/>
                    <div class="article-content">
                        <h2>Introduction</h2>
                        <p>
                            To someone like me, the world of sports betting seems to be an extremely data
                            driven process. Large companies with access to much more sports data than the average
                            viewer are able to create appealing odds that are as close to 50-50 as possible, and then
                            capitalize off of their percentage cuts from each bet.
                        </p>
                        <p>
                            However, the bubble now presents an interesting opportunity for betting. Machine
                            Learning models that were previously used likely are not as effective as they once
                            were. The drastically different living conditions, limited roster slots, increased
                            waiver activity, and many other reasons are why previous regular season data
                            may not be as useful in predicting the outcome NBA games.
                        </p>
                        <p>
                            My approach to tackling this problem was to both a data-driven as well as
                            semi-subjective decision making process. I've watched enough games, listened to enough
                            podcasts, and read enough articles to understand the intricacies of the Mavericks
                            organization.
                        </p>
                        <p>
                            In order to show that these predictions were not altered after the end of the game,
                            I'll be publishing my predictions on Github through commits. However, I will <b>not be 
                            dealing with any real money</b>. This series is simply meant as a way for me to better
                            understand sports analytics modelling.
                        </p>
                        <h2>Prediction</h2>
                        <div className="row_flex">
                            <div>
                                <img style={{maxWidth:'100%',height:'auto',border:'2px gray solid', borderRadius:'8px'}} src={require('./6bubblepredictions1/1fanduelodds.png')}/>
                                <p class="image_label">Figure 1: FanDuel Odds 7/29 Mavericks vs Rockets</p>
                            </div>
                            <p>This game will be <b>over 227 points</b>, at around 232 points. I'm 61% confident that the over bet
                            will be the favorable one. As for the winner, I predict that the Mavericks will <b>win by 2.6 points</b>. 
                            This barely beats out the -1.5 spread odds for the Maverick, so I am not confident <b>on the spread</b>.</p>
                            <p>The rationale behind this prediction can be broken down into three components: Baseline Linear Regression,
                                The Maverick's recent defensive woes, and miscellaneous reasons
                            </p>
                        </div>
                        <h2>Baseline Linear Regression</h2>
                        <p>
                            In order to establish a baseline for what the final score might be, I relied on fairly simple Linear Regression
                            model. Much of this part of the process was figuring out how to use the <a href="https://github.com/swar/nba_api">NBA API</a> library.
                        </p>
                        <Highlight className='Python'>
                            {"from nba_api.stats.endpoints import teamplayerdashboard"}<br/>
                            {}<br />
                            {"nba_teams = teams.get_teams()"}<br/>
                            {"mavs_id = [team for team in nba_teams"}<br/>
                            {"                if team['full_name'] == 'Dallas Mavericks'][0]['id']"}<br/>
                            {}<br />
                            {"mavs_season_stats = teamplayerdashboard.TeamPlayerDashboard(mavs_id)"}<br/>
                            {"mavs_season_stats = mavs_season_stats.get_data_frames()[1]"}<br/>
                            {}<br />
                            {"mavs_season_stats['PPG'] = mavs_season_stats['PTS']/mavs_season_stats['GP']"}<br/>
                            {"mavs_season_stats['MPG'] = mavs_season_stats['MIN']/mavs_season_stats['GP']"}<br/>
                        </Highlight>
                        <p>This code produces the following DataFrame.</p>
                        <div>
                            <img style={{maxWidth:'100%',height:'auto',border:'2px gray solid', borderRadius:'8px'}} src={require('./6bubblepredictions1/2player_stats.png')}/>
                            <p class="image_label">Figure 2: Pandas DataFrame of Mavericks 2019-2020 Player Stats</p>
                        </div>
                        <p>
                            In another DataFrame, I stored the advanced box score of each game. In addition to that, I stored
                            4 additional features
                        </p>
                        <table class="article_table">
                            <tr>
                                <td>Playtime Variance</td>
                                <td>Total Minutes of Injured Players</td>
                                <td>Days Since Last Game</td>
                                <td>Points Per Game of Opponent</td>
                                <td>Points Allowed Per Game of Opponent</td>
                            </tr>
                        </table>
                        <p>
                            <b>Playtime variance</b> measures the variance in all the nonzero seconds played by each player on the team.
                            This is meant to allow for preseason games to also be fitted and tested against the model.
                        </p>
                        <p>
                            <b>Total Minutes of Injured Players</b> sums the minutes per game of all players who aren't playing in the game.
                            This is either due to injury, personal reasons, or having been traded.
                        </p>
                        <p>
                            The other features are relatively self-explanatory. I fitted 4 different models. A points model
                            and points allowed model for both teams.
                        </p>
                        <p>
                            I then had to generate the features for both the Rockets and Mavericks for the upcoming game. All the features
                            are obtainable prior to the game except for Playtime Variance. Thus, I had to predict what the minutes distribution
                            for each team would be.
                        </p>
                        <div class='row_flex' style={{justifyContent:'space-around'}}>
                            <table class="article_table">
                                <tr>
                                    <th>Player Name</th>
                                    <th>Predicted Playing Time</th>
                                </tr>
                                <tr>
                                    <td>Kristaps Porzingis</td>
                                    <td>36</td>
                                </tr>
                                <tr>
                                    <td>Justin Jackson</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>Tim Hardaway Jr.</td>
                                    <td>29</td>
                                </tr>
                                <tr>
                                    <td>Luka Doncic</td>
                                    <td>36</td>
                                </tr>
                                <tr>
                                    <td>Dorian Finney-Smith</td>
                                    <td>33</td>
                                </tr>
                                <tr>
                                    <td>Seth Curry</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>Trey Burke</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Delon Wright</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Antonius Cleveland</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Maxi Kleber</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>J.J. Barea </td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>Josh Reaves </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Boban Marjanovic</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Michael Kidd-Gilchrist</td>
                                    <td>0</td>
                                </tr>
                            </table>
                            <table class="article_table">
                                <tr>
                                    <th>Player Name</th>
                                    <th>Predicted Playing Time</th>
                                </tr>
                                <tr>
                                    <td>James Harden</td>
                                    <td>36</td>
                                </tr>
                                <tr>
                                    <td>Russell Westbrook</td>
                                    <td>36</td>
                                </tr>
                                <tr>
                                    <td>Robert Covington</td>
                                    <td>32</td>
                                </tr>
                                <tr>
                                    <td>P.J. Tucker</td>
                                    <td>33</td>
                                </tr>
                                <tr>
                                    <td>Danuel House Jr.</td>
                                    <td>29</td>
                                </tr>
                                <tr>
                                    <td>Austin Rivers</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <td>Ben McLemore</td>
                                    <td>13</td>
                                </tr>
                                <tr>
                                    <td>Jeff Green</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>Eric Gordon</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>DeMarre Carroll</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Chris Clemons</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Michael Frazier</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Bruno Caboclo</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Tyson Chandler</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Luc Mbah a Moute</td>
                                    <td>0</td>
                                </tr>
                            </table>
                        </div>
                        <p>
                            The Rockets minutes were relatively easy to predict. No offense, but they don't have much
                            flexibility with their roster rotations. While the players that receive minutes varies
                            quite a bit, they often like to have top heavy rotations. They have a lot of high 20s and 30s,
                            but also a couple low 10s.
                        </p>
                        <p>
                            The Mavericks, however, often develop their rotations and starting roster based off of their opponents. 
                            Against the Rockets small ball lineup, it seems pretty clear that Boban shouldn't get many minutes and
                            Dallas will be also using a small ball lineup, with Kristaps/Maxi playing the 5. My projected rotation is
                            at 9 players, but could get shrunken down to 8 depending on how much of an emphasis Rick Carlisle wants
                            to place on these remaining regular season games.
                        </p>
                        <p>
                            Once all the features calculated, the outcome of the models are as such.
                        </p>
                        <table class="article_table" style={{margin:'0 auto',width:'75%'}}>
                            <tr>
                                <th>Team</th>
                                <th>Model</th>
                                <th>Model R^2</th>
                                <th>Prediction</th>
                            </tr>
                            <tr>
                                <td rowspan="2">Dallas <br />Mavericks</td>
                                <td>Points</td>
                                <td>0.3302</td>
                                <td>117.2</td>
                            </tr>
                            <tr>
                                <td>Points Allowed</td>
                                <td>0.2897</td>
                                <td>113.8</td>
                            </tr>
                            <tr>
                                <td rowspan="2">Houston <br />Rockets</td>
                                <td>Points</td>
                                <td>0.4040</td>
                                <td>117.1</td>
                            </tr>
                            <tr>
                                <td>Points Allowed</td>
                                <td>0.4485</td>
                                <td>117.2</td>
                            </tr>
                        </table>
                        <p>
                            Taking a weighted average of the predictions using the accuracy of the model,
                            the final score of the Linear Regression comes out to a 117.2 - 115.2 Mavericks
                            win. When assessing the model, it was clear that the model was able to capture
                            the offensive/defensive ability of the opponent to predict in the correct direction.
                            However, there are likely individual factors (in addition to random noise), unique to the specific game,
                            that are likely responsible for the skewing in different directions. All in all, this prediction
                            is a rather good baseline.
                        </p>

                        <h2>Recent Defensive Woes</h2>
                        <p>
                            One of the main reasons I am hesitant to take the -1.5 spread is due to the lackluster
                            defense that the Mavericks have shown in their scrimmages games, despite them just being
                            scrimmages.
                        </p>
                        <div class="row_flex">
                            <div style ={{width:'50%'}}>
                                <img style={{maxWidth:'100%',height:'auto'}} src={require('./6bubblepredictions1/3defense.png')}/>
                                <p class="image_label">Figure 3: Minutes Variation vs Opponent Scoring Performance</p>
                            </div>
                            <p style={{flex:'2'}}>
                                On the scatter plot on the right, the y-axis represents the difference between how many points the opponent
                                scored minus the opponent's average points per game. Blue represents 2019-20 preseason, orange represents the
                                regular season, and magenta represents the scrimmages. We see the two scrimmages (not including the Lakers game)
                                are quite far up in the left hand corner. 
                            </p>
                            <p>
                                During the 2019-20 season, if my memory serves me correctly, the Maverick's defense began the season terrible.
                                They slowly improved from there. The significantly worse defensive efforts in scrimmages compared to preseason
                                leads me to believe that the defense will once again not start out great.
                            </p>
                        </div>
                        <h2>Miscellaneous</h2>
                        <p>Here are a few other reasons why I'm confident in taking the over for this matchup and hesitant
                            to bet the spread for Dallas.
                        </p>
                        <ul>
                            <li style={{color:'black', fontSize:'18px'}}>
                                Dallas has been pretty terrible in the clutch. They're 2-9 in games that end within 3pts
                            </li>
                            <li style={{color:'black', fontSize:'18px'}}>
                                Houston has to win this game more than Dallas does. It is much easier for them to move
                                up the standings. Also Harden and Westbrook have more to prove than Doncic and Porzingis
                            </li>
                            <li style={{color:'black', fontSize:'18px'}}>
                                Houston is coming off a high scoring game. In the past, they've shown a pattern of back to back
                                high scoring games
                            </li>
                            <li style={{color:'black', fontSize:'18px'}}>
                                The Mavericks' lack of front court depth is not an issue against the Rockets' small ball
                                lineup. 
                            </li>
                        </ul>
                        <h2>Conclusions/Reflections</h2>
                        <p>
                            Looking at my model, seeing the relatively small R^2 values were disappointing. I was under
                            the impression that my model didn't have enough variance. However, I began to understand
                            that its impossible to predict exactly what the score will be. Predicting outcomes of games is significantly
                            more about having high confidence rather than being precise.
                        </p>
                        <h2>Post Game Reflections</h2>
                        <p>
                            Who knew that the game that I wanted to start off with would end up being the highest
                            first half point total in the last 30 years. 160 total points were scored in the first half,
                            and the over under was passed by over 70 points. This just goes to show how volatile and random
                            sports games inherently are. 
                        </p>
                    </div>
                </div>
        </MathJax.Provider>
        <Footer />

    </body>
    )
  }
}

export default BubblePredictions1;
