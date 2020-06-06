import React, { Component } from 'react';

import './3Projects.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import WikiAtomicEdits from "../images/browndatathon.jpg"
import JumboCode from "../images/jumbocode.png"
import Topcoder from "../images/topcoder.png"




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          'image':WikiAtomicEdits,
          'name':'WikiAtomicEdits',
          'group': 'Brown Datathon 2020',
          'date': 'February 22, 2020 - February 23, 2020',
          'skills': ['JupyterNotebook','Pandas','NLTK','SciKit-Learn'],
          'description': 'We were given data from 1 billion Wikipedia Article edits, and spent 22 hours working on building a Machine learning model. Given an original sentence and the phrase that was inserted, our goal was to predict where in the original sentence the phrase would be inserted. As a freshman team with no Machine Learning experience, we learned the basis and trained our model, ultimately winning the Creativity award at the Datathon.'
        },
        {
          'image':JumboCode,
          'name':'Just-A-Start Youthbuild',
          'group': 'Jumbocode',
          'date': 'September 2019 - Present',
          'skills': ['HTML','CSS','Reac.JS'],
          'description': 'On a team of 10, I have been working on implementing a front-end interface for a web application for Just-A-Start YouthBuild. Just-A-Start YouthBuild is a nonprofit organization aiming to educate people who have dropped out of traditional high school. I am currently learning React.js by creating admin and user interface prototypes from project designers.'
        },
        {
          'image':Topcoder,
          'name':'SIA - Smart Investment Advisor: Python Optimization',
          'group': 'Topcoder',
          'date': 'June 2019',
          'skills': ['Python','JupyterNotebook','Pandas','Scipy.optimize','Matplotlib'],
          'description': 'I was tasked with turning Excel operations from a stock portfolio on Excel into Python using Jupyter Notebook. I learned how to use Pandas to read in Excel files, convert them into dataframes, and plot them using Matplotlib after manipulating dataframe. Scipy Optimize was used to efficiently emulate operations in the original Excel file.'
        },
        {
          'image':Topcoder,
          'name':'50th Anniversary of Apollo 11',
          'group': 'Topcoder',
          'date': 'June 2019',
          'skills': ['Python','Tikinter','OpenCV'],
          'description': 'I placed 1st out of 76 participants in an ACII art challenge to celebrate the 50th anniversary of Apollo 11 I used a combination of hardcoded ASCII art, dynamically generated ASCII animation from existing footage of rotating Earth, and existing photos with mathematical transformations performed upon them.'
        },
        {
          'image':Topcoder,
          'name':'Proximity Hazard Detection',
          'group': 'Topcoder',
          'date': 'June 2018',
          'skills': ['Python','OpenCV'],
          'description': 'I participated in a 20-day long online hazard detection competition as my first project in freelance coding. I recieved footage from the back of a garbage truck and was tasked with assessing hazard level by identifying truck direction, bin lifter movement, and nearby people. Over the week, I learned Python for the first time, along with the OpenCV Computer Vision Library in order to identify behavior in the footage. I finished 3rd out of 142 registered participants.'
        },
      ]
    }
  }

  componentDidMount() {
  }

  render(){
    return(
    <div className="container">
      <Header pageNum = {2} />
      <div className="body" id="transition">
        <h1 className="underline">Projects</h1>
        {this.state.projects.map((element) =>  <div className="project_entry">
                                                        <div className="project_image_container">
                                                          <img className ="project_image" src={element.image} alt=""/>
                                                        </div>
                                                        <div className="project_text">
                                                          <p className="project_name">{element.name}</p>
                                                          <p className="project_group">{element.group}</p>
                                                          <p className="date">{element.date}</p>
                                                          <div className="bullet_list">{element.skills.map((e, index) => <div className="bullets">{ index !== 0 && <p className ="bullet">&bull;</p>} <p className="project_languages">{e}</p></div>)}</div>
                                                          <p className="project_description">{element.description}</p>
                                                        </div>
                                                      </div>)}
      </div>
      <Footer />
    </div>
    )
  }
}

export default Projects;
