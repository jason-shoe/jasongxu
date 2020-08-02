import React, { Component } from 'react';
import './App.css';
import {
  HashRouter,
  Route
} from "react-router-dom";
import Everything from './pages/0everything';
import Blog from './pages/5Blog.js';
import AthleteBrandingComparison from './articles/1AthleteBrandingComparison.js'
import GroceryShopping from './articles/2GroceryShopping.js'
import ChineseVirus from './articles/3ChineseVirus.js'
import SpotifySentiment from './articles/4SpotifySentiment.js'
import SpotifyGenre from './articles/5SpotifyGenre.js'
import BubblePredictions1 from './articles/6BubblePredictions1.js'
import BubblePredictions2 from './articles/7BubblePredictions2.js'

class App extends Component {
  componentDidMount(){
    document.title = "Jason Xu";
  }
  render() {
    return (
      <HashRouter basename="/" hashType="slash">
        
        <div>
          <Route exact path="/" component={Everything} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Blog/Athlete-Branding-Comparison" component={AthleteBrandingComparison} />
          <Route exact path="/Blog/Grocery-Shopping" component={GroceryShopping} />
          <Route exact path="/Blog/Chinese-Virus" component={ChineseVirus} />
          <Route exact path="/Blog/Spotify-Sentiment" component={SpotifySentiment} />
          <Route exact path="/Blog/Spotify-Genre" component={SpotifyGenre} />
          <Route exact path="/Blog/Bubble-Predictions-Rockets" component={BubblePredictions1} />
          <Route exact path="/Blog/Bubble-Predictions-Suns" component={BubblePredictions2} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
