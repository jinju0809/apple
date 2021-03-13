import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div className="intro-box">
        <section id="intro-sec">
        <ul>
          <li id="intro-pic" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/images/introduction2000.jpg)'}}>
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
            </div>
          </li>
        </ul>
       </section>
      </div>
    )
  }
}
