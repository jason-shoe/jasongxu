import React, { Component } from 'react';

import './Main.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Element } from 'react-scroll';

import About from './1About.jsx';
import Education from './2Education.jsx';
import Projects from './3Projects.jsx';
import Experience from './4Experience.jsx';
import Skills from './6Skills.jsx';
import Blog from './5Blog.jsx';

class Everything extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <Header pageNum={0} />
        <Element
          id="about_element"
          name="about_element"
          style={{
            width: '70%',
            padding: '0% 15%',
            backgroundColor: '#ffffff',
            paddingTop: '170px',
            paddingBottom: '100px',
          }}
        >
          <About />
        </Element>
        <Element
          id="experience_element"
          name="experience_element"
          style={{
            width: '70%',
            padding: '0% 15%',
            backgroundColor: '#eeeeee',
          }}
        >
          <Experience id="top" />
        </Element>
        <Element
          id="education_element"
          name="education_element"
          style={{
            width: '70%',
            padding: '0% 15%',
            backgroundColor: '#ffffff',
          }}
        >
          <Education />
        </Element>

        <Element
          id="skills_element"
          name="skills_element"
          style={{
            width: '70%',
            padding: '0% 15%',
            paddingBottom: '20px',
            backgroundColor: '#eeeeee',
          }}
        >
          <Skills />
        </Element>

        <Element
          id="projects_element"
          name="projects_element"
          style={{
            width: '70%',
            padding: '0% 15%',
            backgroundColor: '#ffffff',
          }}
        >
          <Projects />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default Everything;
