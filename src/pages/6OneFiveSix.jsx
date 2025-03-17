import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import './Main.css';
import styles from './OneFiveSix.module.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import GameProba from './components/GameProba.jsx';
import data from './components/games.csv';
class OneFiveSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {},
    };
  }

  componentDidMount() {
    d3.csv(data).then(data => {
      this.setState(prevState => ({
        table: data,
      }));
    });
  }

  render() {
    console.log(this.state.table);
    d3.keys(this.state.table)
      .splice(0, d3.keys(this.state.table).length - 1)
      .reverse()
      .map(data =>
        console.log(
          this.state.table[String(parseInt(data))],
          this.state.table[String(parseInt(data) + 1)]
        )
      );
    return (
      <div>
        <Header pageNum={5} />

        <div className="everything">
          <h1 className="underline">OneFiveSix</h1>
          <p style={{ color: 'gray', marginTop: '0px', textAlign: 'left' }}>
            <b style={{ color: 'black' }}>About:</b> OneFiveSix is inspired by
            the sports forecasting work of FiveThirtyEight. However, rather than
            representing the 538 electoral colleges of the United States, 156
            represents the total points scored by Dirk Nowitzki in the 2011 NBA
            Finals 6 game series against the Miami Heat.
          </p>
          <p style={{ color: 'gray', marginTop: '0px', textAlign: 'left' }}>
            <b style={{ color: 'black' }}>Methodology:</b> For each predictor
            (Points Per Game, Missing Players, Playoff Experience, Previous Game
            Performance, etc.), a predicted score is calculated using a
            Bias-Boosted Monte Carlo Simulation. Each playoff game from the past
            3 years are assigned a weight on a scale of 0-100, and sampled 1000
            times. The outcomes from each of these predictors are then combined
            using a Linear Regression, and assigned a Win Probability based off
            of the spread according to a Normal Distribution.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {d3
              .keys(this.state.table)
              .splice(0, d3.keys(this.state.table).length - 1)
              .reverse()
              .map(data => [
                (data == d3.keys(this.state.table).length - 2 ||
                  this.state.table[parseInt(data)]['Date'] !=
                    this.state.table[parseInt(data) + 1]['Date']) && (
                  <p
                    style={{
                      width: '100%',
                      borderBottom: '2px solid gray',
                      fontSize: '20px',
                      margin: '0px',
                      fontWeight: 'bold',
                      color: 'gray',
                      paddingBottom: '5px',
                    }}
                  >
                    {this.state.table[parseInt(data)]['Date']}
                  </p>
                ), //
                <GameProba
                  TeamName={this.state.table[data]['TeamName']}
                  OpponentTeamName={this.state.table[data]['OpponentTeamName']}
                  TeamImagePath={require(
                    '../images/onefivesix/logos/' +
                      this.state.table[data]['TeamName'] +
                      '.png'
                  )}
                  OpponentTeamImagePath={require(
                    '../images/onefivesix/logos/' +
                      this.state.table[data]['OpponentTeamName'] +
                      '.png'
                  )}
                  TeamWinProba={parseFloat(
                    this.state.table[data]['TeamWinProba']
                  )}
                  OpponentTeamWinProba={parseFloat(
                    this.state.table[data]['OpponentTeamWinProba']
                  )}
                  TeamPoints={parseFloat(this.state.table[data]['TeamPoints'])}
                  OpponentTeamPoints={parseFloat(
                    this.state.table[data]['OpponentTeamPoints']
                  )}
                  TeamPointsActual={parseFloat(
                    this.state.table[data]['TeamPointsActual']
                  )}
                  OpponentTeamPointsActual={parseFloat(
                    this.state.table[data]['OpponentTeamPointsActual']
                  )}
                />,
              ])}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OneFiveSix;
