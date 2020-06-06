import React, { Component } from 'react';
import './App.css';
import {
  HashRouter,
  Route
} from "react-router-dom";
import About from './pages/1About.js';
import Education from './pages/2Education.js';
import Projects from './pages/3Projects.js';
import Experience from './pages/4Experience.js';
import Blog from './pages/5Blog.js';
import AthleteBrandingComparison from './articles/1AthleteBrandingComparison.js'
import GroceryShopping from './articles/2GroceryShopping.js'
import ChineseVirus from './articles/3ChineseVirus.js'
import SpotifySentiment from './articles/4SpotifySentiment.js'


class App extends Component {
  componentDidMount(){
    document.title = "Jason Xu";
  }
  render() {
    return (
      <HashRouter basename="/" hashType="slash">
        
        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Experience" component={Experience} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Blog/Athlete-Branding-Comparison" component={AthleteBrandingComparison} />
          <Route exact path="/Blog/Grocery-Shopping" component={GroceryShopping} />
          <Route exact path="/Blog/Chinese-Virus" component={ChineseVirus} />
          <Route exact path="/Blog/Spotify-Sentiment" component={SpotifySentiment} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
