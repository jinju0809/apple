import React, { Component } from 'react'
import { GoMarkGithub } from "react-icons/go";
import Icon from "../icon";
import iconSet from "../selection.json";
import { iconList } from "icomoon-react";
import style from "../style.css";
import styled from 'styled-components';


export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-box">
        <div id="profile-box">
         <img src={process.env.PUBLIC_URL + "/images/profile.jpg"} alt="profile"/>
          <h3>Jinju Youn</h3>
          <div id="profile-email">
            <p>
              <a href="mailto:jjyoun48@gmail.com">
              <small>jjyoun48@gmail.com</small>
              </a>
            </p>
          </div>
        </div>
        <div id="menu-box">
          <ul>
            <li><a href="#introduction">Introduction</a> </li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#timeline">Timeline</a></li>
          </ul>
        </div>
        <div id="contact-box">
          <ul>
            <li><a href="https://github.com/jinju0809"><Icon color="#444" size={20} icon="github" /></a></li>
            <li><a href="https://www.instagram.com/_thx_a_lot_/"><Icon color="#444" size={20} icon="instagram" /></a></li>
            <li><a href="https://jinju0809.github.io"><Icon color="#444" size={20} icon="blogger" /></a></li>
          </ul>
        </div>
        <div id="sidebar-foot-box">
          <p><small>Made with <Icon color="#444" size={20} icon="heart" /> and <Icon color="#444" size={20} icon="mug" /></small></p>
        </div>

      </div>
    )
  }
}
