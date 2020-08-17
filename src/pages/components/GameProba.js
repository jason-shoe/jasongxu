import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GameProba extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render(){
    console.log('this is the win proba', this.props)
    return(
    <div style={{minWidth:'275px', width:'30%', margin: '20px 5px'}}>
        <table style = {{width:'100%',textAlign:'center',borderCollapse:'collapse'}}>
            <thead>
                <tr style={{color:'gray'}}>
                    <th></th>
                    <th style={{width:'40%'}}></th>
                    <th>Proba.</th>
                    <th>Proj.</th>
                    <th>Actual</th>
                </tr>
            </thead>
            <tbody style={{fontSize:'18px', margin:'5px', borderRadius:'0px', border:'2px solid black',  boxShadow: '2px 3px 3px 1px gray'}}>
                <tr>
                    <td><img style={{marginRight:'5px',height:'40px',width:'40px'}} src={this.props.TeamImagePath}/></td>
                    <td style={{textAlign:'left',fontSize:'20px'}}><b>{this.props.TeamName}</b></td>
                    
                    {this.props.TeamWinProba > this.props.OpponentTeamWinProba && 
                    <td style={{color:'white', fontWeight:'bolder', backgroundColor:'var(--header-one)'}}>{(this.props.TeamWinProba*100).toFixed(1)}%</td>}
                    {this.props.TeamWinProba < this.props.OpponentTeamWinProba && 
                    <td>{(this.props.TeamWinProba*100).toFixed(1)}%</td>}

                    {this.props.TeamPoints > this.props.OpponentTeamPoints && 
                    <td style={{color:'white', fontWeight:'bolder', backgroundColor:'var(--header-one)', borderRight:'2px solid black'}}>{Math.round(this.props.TeamPoints)}</td>}
                    {this.props.TeamPoints < this.props.OpponentTeamPoints && 
                    <td style={{borderRight:'2px solid black'}}>{Math.round(this.props.TeamPoints)}</td>}

                    {this.props.TeamPointsActual > this.props.OpponentTeamPointsActual && 
                    <td style={{color:'white', fontWeight:'bolder', backgroundColor:'var(--header-one)'}}>{Math.round(this.props.TeamPointsActual)}</td>}
                    {this.props.TeamPointsActual < this.props.OpponentTeamPointsActual && 
                    <td>{Math.round(this.props.TeamPointsActual)}</td>}
                    {isNaN(this.props.TeamPointsActual) && 
                    <td></td>}

                    
                </tr>
                <tr>
                    <td><img style={{marginRight:'5px',height:'40px',width:'40px'}} src={this.props.OpponentTeamImagePath}/></td>
                    <td style={{textAlign:'left',fontSize:'20px'}}><b>{this.props.OpponentTeamName}</b></td>
                    
                    {this.props.TeamWinProba < this.props.OpponentTeamWinProba && 
                    <td style={{color:'white', fontWeight:'bolder', backgroundColor:'var(--header-one)'}}>{(this.props.OpponentTeamWinProba*100).toFixed(1)}%</td>}
                    {this.props.TeamWinProba > this.props.OpponentTeamWinProba && 
                    <td>{(this.props.OpponentTeamWinProba*100).toFixed(1)}%</td>}
                    
                    {this.props.TeamPoints < this.props.OpponentTeamPoints && 
                    <td style={{color:'white', fontWeight:'bolder', backgroundColor:'var(--header-one)', borderRight:'2px solid black'}}>{Math.round(this.props.OpponentTeamPoints)}</td>}
                    {this.props.TeamPoints > this.props.OpponentTeamPoints && 
                    <td style={{borderRight:'2px solid black'}}>{Math.round(this.props.OpponentTeamPoints)}</td>}

                    {this.props.TeamPointsActual < this.props.OpponentTeamPointsActual && 
                    <td style={{color:'white', fontWeight:'bolder', backgroundColor:'var(--header-one)'}}>{Math.round(this.props.OpponentTeamPointsActual)}</td>}
                    {this.props.TeamPointsActual > this.props.OpponentTeamPointsActual && 
                    <td>{Math.round(this.props.OpponentTeamPointsActual)}</td>}
                    {isNaN(this.props.TeamPointsActual) && 
                    <td></td>}
                </tr>
            </tbody>
        </table>
    </div>
    )
  }
}

export default GameProba;
