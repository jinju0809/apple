import React, { Component } from 'react'
import Icon from "../icon";

export default class Introduction extends Component {
  render() {
    return (
      <div id="intro-box">
        <section id="intro-sec">
        <ul>
          <li className="intro-pic grain" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/images/introduction_lower.jpg)'}}>
            <span id="introduction"></span>
            <div id="intro-text">
             <h1>
               <span>W</span>
               <span>E</span>
               <span>L</span>
               <span>C</span>
               <span>O</span>
               <span>M</span>
               <span>E</span>
               <span>!</span>
             </h1>
             <span> Here's my RESUME:  <a id="resume" href="https://www.notion.so/2d197d35203e4d3eb725585610574a8f"><Icon color="#444" size={20} icon="file-text2" /></a>
             </span>     
            </div>
          </li>
        </ul>
       </section>
      </div>
    )
  }
}
