import React, { Component } from 'react';
import Icon from "../icon";


export default class Projects extends Component {
  render() {
    return (
      <div id="project-box">
        <div id="project-box2">
          <span id="projects"></span>
          <h3 id="title3">PROJECTS</h3>
          <div id="content-box2">
            <div className="projects 1">
              <div className="projectImg 1">
              <a href="https://www.github.com/jinju0809/lookat">
                <img src={process.env.PUBLIC_URL + '/images/lookat.png'} />
              </a>
              </div>
              <div className="projectDesc 1">
                <div className="projecta">
                <a href="https://www.github.com/jinju0809/lookat">🔗GITHUB</a>
                </div>
                <p>
                  팀 프로젝트로 제작한 가상 쇼핑몰 사이트 입니다.<br />
                담당: Product, Order, Cart 페이지 DB, 서버 구현<br />
                개발환경: Spring Framework, Java, Oracle DB, Javascript, jQuery 외<br/>
                </p>
              </div>
            </div>
            <div className="projects 2">
              <div className="projectImg 2">
                <a href="https://www.github.com/jinju0809/apple">
                <img src={process.env.PUBLIC_URL + '/images/portfolio.png'} />
                </a>
              </div>
              <div className="projectDesc 2">
                <div className="projecta">
                <a href="https://www.github.com/jinju0809/apple">🔗GITHUB</a>
                </div>
                <p>
                  개인 포트폴리오 사이트 입니다.<br/>
                  개발환경: react <br/>
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
