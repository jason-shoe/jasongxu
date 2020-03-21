import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import About from './pages/About.js';
import Education from './pages/Education.js';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Blog from './pages/Blog.js';
import AthleteBrandingComparison from './articles/AthleteBrandingComparison.js'
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Experience" component={Experience} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Athlete-Branding-Comparison" component={AthleteBrandingComparison} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
