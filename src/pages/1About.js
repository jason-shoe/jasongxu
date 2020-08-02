import React, { Component } from 'react';


import './Main.css';
import styles from './About.module.css';
import { FaFilePdf, FaFacebook, FaEnvelopeOpen, FaGithub, FaLinkedin} from 'react-icons/fa';
import Resume from "../images/jxuResume.pdf"

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    }
  }

  componentDidMount() {
  }
  
  changeColor(){
    // if(this.state.color === 'black'){
    //   this.setState({
    //     color: '#EA5455'
    //   })
    // }else{
    //   this.setState({
    //     color: 'black'
    //   })
    // }
    // this.forceUpdate();
  }

  render(){
    return(
      <div className={styles.top}>
        <div className={styles.information_div}>
          <p className={styles.big_name}>Hi, my name is Jason.</p>
          <p id = {styles.transition} className={styles.medium_text}>Tufts University '23</p>
          <p id = {styles.transition} className={styles.phone_number}>(781) 827 9263</p>
          <p id = {styles.transition}>I'm a freshman at Tufts University in the School of Arts and Sciences
              and this is my personal website. I'm an aspiring Data Scientist double majoring in 
              Mathematics and Computer Science. I was born in 2001 in Covington, Virginia and have
              since lived in Ohio, Texas, Hong Kong, Shanghai, and now Massachusetts.</p>
          <p id = {styles.transition}>My passion for Data Science stems from both my 
              love for basketball analytics as well as competitive mathematics.
              This website is meant to showcase some of my recent work. Here
              I have compiled together all my personal projects, education information,
              work experience, and much more.</p>
          <p id = {styles.transition}>If you would like to take a look at my resume, you can download it
              with the button below.</p>
          <div id = {styles.transition} className={styles.bio_resume}>
            <a href={Resume}><FaFilePdf class={styles.resume_button} size="2em"/></a>
            <p className={styles.resume_label}>Resume</p>
          </div>
          <p id = {styles.transition}>If you would like to connect, you can contact me in various ways!.</p>
          <div className={styles.button_links}>
            <a className={styles.contact_button} href="https://github.com/jason-shoe"><FaGithub class={styles.resume_button} size="2em"/></a>
            <a className={styles.contact_button}  href="mailto: jxu13@tufts.edu"><FaEnvelopeOpen class={styles.resume_button} size="2em"/></a>
            <a className={styles.contact_button}  href="https://www.facebook.com/profile.php?id=100008322000625"><FaFacebook class={styles.resume_button} size="2em"/></a>
            <a className={styles.contact_button}  href="https://www.linkedin.com/in/jasongxu/"><FaLinkedin class={styles.resume_button} size="2em"/></a>
          </div>
        </div>

        <img src={require("../images/profile.jpeg")} id={styles.main_photo} alt = "" />
      
      </div>
    )
  }
}

export default About;
