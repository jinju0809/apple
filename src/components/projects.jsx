import React, { Component } from 'react';


export default class Projects extends Component {
  render() {
    return (
      <div id="project-box">
        <div>
          <h3>PROJECTS</h3>
          <div id="content-box">
            <div className="projects 1">
              <div className="projectImg 1">
                <img src={process.env.PUBLIC_URL + '/images/lookat.png'} />
              </div>
              <div className="projectDesc 1">
                <p>
                  팀 프로젝트로 제작한 가상 쇼핑몰 사이트 입니다.<br />
                담당: Product, Order, Cart 페이지 DB, 서버 구현<br />
                개발환경: Spring Framework, Java, Oracle DB, Javascript, jQuery 외
                </p>
              </div>
            </div>
            <div className="projects 2">
              <div className="projectImg 2">
                <img src={process.env.PUBLIC_URL + '/images/portfolio.png'} />
              </div>
              <div className="projectDesc 2">
                <p>
                  리액트를 사용하여 제작한 포트폴리오 사이트 입니다.<br />
                </p>
              </div>
            </div>
            adipiscing elit. Duis scelerisque porta libero,
            </div>
        </div>
      </div>
    );
  }
}
