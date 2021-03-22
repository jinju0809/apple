import React, { Component } from 'react'
import 'aos/dist/aos.css';

export default class Contacts extends Component {
  render() {
    return (
      <div id="contact-box" data-aos="fade-up">
        <div>
          <h3 id="contact-h3">CONTACT</h3>
          <br/>
          <div id="contact-page-box">
            📞 : 010-6643-5482<br/>
            ✉ : jjyoun48@gmail.com 
          </div>
        </div>
      </div>
    )
  }
}
