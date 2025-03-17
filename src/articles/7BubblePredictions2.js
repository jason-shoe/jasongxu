import React, { Component } from 'react';

import './Articles.css';
import Header from '../pages/components/Header.jsx';
import Footer from '../pages/components/Footer.jsx';
import Highlight from 'react-highlight';

import MathJax from 'react-mathjax';

import ArticleImage from './graphs4/spotify.png';

import styles from './SpotifyGenre.module.css';

class BubblePredictions2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNum: 0,
      color: ['black', 'black'],
      dataOne: [],
    };
    this.child = React.createRef();
  }

  componentDidMount() {}
  render() {
    return (
      <body class="container">
        <Header pageNum={5} />
        <MathJax.Provider>
          <div class="everything">
            <h1 id="article-title">
              Mavericks vs Suns <br /> Bubble Predictions Part 2{' '}
            </h1>
            <img
              class="article-image"
              src={require('./7bubblepredictions2/0main.jpg')}
              alt=""
            />
            <div class="article-content">
              <h2>Introduction</h2>
              <p>
                For this prediction, I decided to try to tackle making a Monte
                Carlo simulation. I've heard about this method from various
                sources and decided to give it a try.
              </p>

              <h2>Prediction</h2>
              <div className="row_flex">
                <div>
                  <img
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      border: '2px gray solid',
                      borderRadius: '8px',
                    }}
                    src={require('./7bubblepredictions2/1fanduelodds.jpg')}
                  />
                  <p class="image_label">
                    Figure 1: FanDuel Odds 8/1 Mavericks at Suns
                  </p>
                </div>
                <p>
                  The Suns are going to score <b>less than 116.5</b> points in
                  their game with the Mavericks. I'm 64.6% confident that this
                  will occur.
                </p>
              </div>
              <h2>Monte Carlo Simulation</h2>
              <p>
                The population that I am sampling from are the regular season
                games that both the Mavericks and Suns played before the
                shutdown. Rather than randomly sampling from this population,
                introducing a bias will allow the simulation to take into
                account the unique aspects of the game. Thus, games that are
                similar to the Mavericks vs Suns game will have more weight, and
                thus be more likely to be sampled.
              </p>
              <table class="article_table">
                <tr>
                  <th>Offense Features</th>
                  <td>Total Minutes of Injured Players</td>
                  <td>Points Scored in Last Game</td>
                  <td>Points Allowed Per Game of Opponent</td>
                </tr>
                <tr>
                  <th>Defense Features</th>
                  <td>Total Minutes of Injured Players</td>
                  <td>Points Allowed in Last Game</td>
                  <td>Points Per Game of Opponent</td>
                </tr>
              </table>
              <p>
                For each of these features, I sampled with replacement 10,000
                games in order. The weightings of each game are determined as
                such.
              </p>
              <MathJax.Node
                formula={`W_{prev} = \\frac{1}{|x_{curr} - x_{prev}|}`}
              />
              <p>
                Where x_curr is the value of the feature from the upcoming game,
                and x_prev is the value from the game whose weight is being
                currently assessed.
              </p>
              <div class="row_flex">
                <div style={{ width: '25%' }}>
                  <img
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      border: '2px gray solid',
                      borderRadius: '8px',
                    }}
                    src={require('./7bubblepredictions2/3simulationdataframe.png')}
                  />
                  <p class="image_label">
                    Figure 2: Pandas DataFrame of Mavericks 2019-2020 Simulated
                    Game Scores
                  </p>
                </div>
                <div
                  style={{
                    width: '70%',
                    paddingLeft: '5%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <p>
                    Given more time, I would love to explore some more features
                    and see how if adding more would cause more accurate
                    predictions to be made. Interestingly, I discovered that the
                    Suns perform poorly after having a high scoring game the
                    following game.
                  </p>
                  <p>
                    Using the three respective features, I then incorporated the
                    FanDuel spreads and over/under in order to determine which
                    metric I had the most confidence with. I found that the Suns
                    projected score was significantly higher than what my model
                    was predicting.
                  </p>
                </div>
              </div>
              <p>
                Predicting the Suns points total can be broken down into 6
                different features. The 3 defensive features from the Mavericks
                model, and the 3 offensive features from the Suns model. The
                following graph is a running average of the confidence that the
                Suns will score less than 117 points.
              </p>
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      border: '2px gray solid',
                      borderRadius: '8px',
                    }}
                    src={require('./7bubblepredictions2/2simulationgraph.png')}
                  />
                </div>
                <p class="image_label">
                  Figure 3: Monte Carlo Simulation Running Average
                </p>
              </div>
              <p>
                5 of the 6 simulations showed promising results, with around
                74-90% confidence. However, the one simulation had only 4%
                confidence. This simulation was created using the missing
                minutes metric. However, this may be simply from an outlier in
                the regular season data. There was likely a game with very
                similar missing minutes value, and thus an overwhelming number
                of samples from the same game.
              </p>
              <p>
                The average of all the 6 simulations is 64%, which is slightly
                above the 57% confidence that is required to overcome a -118
                betting odd. However, I believe that the confidence is likely
                above the 64% produced by the simulations due to the extreme
                outlier.
              </p>
              <h2>Subjective Reasons</h2>
              <p>
                Here are a few other reasons why I'm confident in taking the
                under for the Suns point total.
              </p>
              <ul>
                <li style={{ color: 'black', fontSize: '18px' }}>
                  The Suns haven't historically performed very well after a high
                  scoring game.
                </li>
                <li style={{ color: 'black', fontSize: '18px' }}>
                  The Suns don't have any great 3 point shooters. Thus, the
                  unique background behind the backboard will not significantly
                  increase the shooting percentages of any of the players since
                  they aren't prolific scorers.
                </li>
              </ul>
              <h2>Conclusions/Reflections</h2>
              <p>
                I feel much better about this model than my simple linear
                regression since it takes into account the regular season data.
                Using Monte Carlo simulations is a lot less subjective than my
                previous blog post.
              </p>
              <h2>Post Game Reflections</h2>
            </div>
          </div>
        </MathJax.Provider>
        <Footer />
      </body>
    );
  }
}

export default BubblePredictions2;
