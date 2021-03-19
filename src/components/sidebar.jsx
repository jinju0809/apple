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
            <li><a className="sideMenu" href="#intro-box">Introduction</a> </li>
            <li><a className="sideMenu" href="#about-box">About</a></li>
            <li><a className="sideMenu" href="#project-box">Projects</a></li>
            <li><a className="sideMenu" href="#contact-box">Contact</a></li>
          </ul>
        </div>
        <div id="link-box">
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
