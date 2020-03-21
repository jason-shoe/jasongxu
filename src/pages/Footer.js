import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import './About.css';
import { FaFacebook, FaEnvelopeOpen, FaGithub, FaFilePdf} from 'react-icons/fa';
import ProfilePic from "../images/profile.jpeg"
import TopCoderSmallRed from "../images/topcoderlogosmallred.jpg"
import TopCoderSmall from "../images/topcoderlogosmall.jpg"


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['black', 'black', 'black', 'black', 'black'],
      topcoder: true
    }
  }

  componentDidMount() {
    
  }
  changeColor(num){
    if(num == 4){
      this.state.topcoder = !this.state.topcoder;
    }
    if(this.state.colors[num] == 'black'){
      this.state.colors[num] = '#EA5455';
    }else{
      this.state.colors[num] = 'black';
    }
    this.forceUpdate();
  }

  render(){
    return(
      <div class="bottom">
        
        <p class="contact">Documents and Links</p>
        
        <div class="button_links">
          <div>
            <a class="contact_button" href="https://github.com/jason-shoe"><FaGithub color={this.state.colors[0]} onMouseEnter = {() => this.changeColor(0)} onMouseLeave = {() => this.changeColor(0)} size="3em"/></a>
            <p class="button_label">Github</p>
          </div>
          <div>
            <a class="contact_button"  href="mailto: jxu13@tufts.edu"><FaEnvelopeOpen color={this.state.colors[1]} onMouseEnter = {() => this.changeColor(1)} onMouseLeave = {() => this.changeColor(1)} size="3em"/></a>
            <p class="button_label">Email</p>
          </div>
          <div>
            <a class="contact_button"  href="https://www.facebook.com/profile.php?id=100008322000625"><FaFacebook color={this.state.colors[2]} onMouseEnter = {() => this.changeColor(2)} onMouseLeave = {() => this.changeColor(2)}  size="3em"/></a>
            <p class="button_label">Facebook</p>
          </div>
          <div>
            <a class="contact_button"  href="/images/jxuResume.pdf" download="jxuResume.pdf"><FaFilePdf color={this.state.colors[3]} onMouseEnter = {() => this.changeColor(3)} onMouseLeave = {() => this.changeColor(3)} size="3em"/></a>
            <p class="button_label">Resume</p>
          </div>
          <div class="topcoder" onMouseEnter = {() => this.changeColor(4)} onMouseLeave = {() => this.changeColor(4)}>
            {this.state.topcoder && <a id="topcoder_button_one" class="contact_button" href="https://www.topcoder.com/members/jason.shoe"><img src={TopCoderSmall} /></a>}
            {!this.state.topcoder && <a id="topcoder_button_one" class="contact_button" href="https://www.topcoder.com/members/jason.shoe"><img src={TopCoderSmallRed} /></a>}
            <p class="button_label">Topcoder</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;