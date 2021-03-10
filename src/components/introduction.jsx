import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div className="intro-box">
        <ul>

        <li id="intro-pic" style={{backgroundImage: 'url(images/introduction.jpg)'}}>
         <div id="intro-text">
            <h1>Welcome!</h1>
            </div>
        </li>
        </ul>
      </div>
    )
  }
}
