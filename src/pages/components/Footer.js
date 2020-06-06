import React, { Component } from 'react';
import update from 'react-addons-update';

import { FaFacebook, FaEnvelopeOpen, FaGithub, FaFilePdf} from 'react-icons/fa';
import TopCoderSmallRed from "../../images/topcoderlogosmallred.jpg"
import TopCoderSmall from "../../images/topcoderlogosmall.jpg"

import Resume from "../../images/jxuResume.pdf"


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
    var curr = !this.state.topcoder
    if(num === 4){
      console.log(!curr)
      if(this.state.topcoder){
        this.setState({
          topcoder: false
        })
      }else{
        this.setState({
          topcoder: true
        })
      }
      
    }else if(this.state.colors[num] === 'black'){
      this.setState(update(this.state, {
        colors: {
          [num]: {
            $set: '#EA5455'
          }
        }
      }));
    }else{
      this.setState(update(this.state, {
        colors: {
          [num]: {
            $set: 'black'
          }
        }
      }));
    }
    this.forceUpdate();
  }

  render(){
    return(
      <div className="bottom">
        
        <p className="contact">Documents and Links</p>
        
        <div className="button_links">
          <div>
            <a className="contact_button" href="https://github.com/jason-shoe"><FaGithub color={this.state.colors[0]} onMouseEnter = {() => this.changeColor(0)} onMouseLeave = {() => this.changeColor(0)} size="3em"/></a>
            <p className="button_label">Github</p>
          </div>
          <div>
            <a className="contact_button"  href="mailto: jxu13@tufts.edu"><FaEnvelopeOpen color={this.state.colors[1]} onMouseEnter = {() => this.changeColor(1)} onMouseLeave = {() => this.changeColor(1)} size="3em"/></a>
            <p className="button_label">Email</p>
          </div>
          <div>
            <a className="contact_button"  href="https://www.facebook.com/profile.php?id=100008322000625"><FaFacebook color={this.state.colors[2]} onMouseEnter = {() => this.changeColor(2)} onMouseLeave = {() => this.changeColor(2)}  size="3em"/></a>
            <p className="button_label">Facebook</p>
          </div>
          <div>
            <a className="contact_button"  href={Resume} download={Resume}><FaFilePdf color={this.state.colors[3]} onMouseEnter = {() => this.changeColor(3)} onMouseLeave = {() => this.changeColor(3)} size="3em"/></a>
            <p className="button_label">Resume</p>
          </div>
          <div className="topcoder" onMouseEnter = {() => this.changeColor(4)} onMouseLeave = {() => this.changeColor(4)}>
            {this.state.topcoder && <a id="topcoder_button_one" className="contact_button" href="https://www.topcoder.com/members/jason.shoe"><img src={TopCoderSmall} alt=""/></a>}
            {!this.state.topcoder && <a id="topcoder_button_one" className="contact_button" href="https://www.topcoder.com/members/jason.shoe"><img src={TopCoderSmallRed} alt=""/></a>}
            <p className="button_label">Topcoder</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;