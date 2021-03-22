import React, { Component } from 'react'
import 'aos/dist/aos.css';

export default class About extends Component {
  render() {
    return (
      <div id="about-box" >
          <span id="about" ></span>
          <h3 id="title3" data-aos="fade-up">Who am I?</h3>
          <div id="content1" data-aos="fade-up">
            <strong>생각하는 개발자 윤진주 입니다.</strong><br />
            <p>
            시대의 흐름을 쫓기보다 그 앞에서 물결을 만들어 내는 사람이 되고 싶은 윤진주 입니다. 
            <br/><br/>
            개발자의 매력은 끝없는 공부와 문제해결 후 얻는 성취감이라고 생각합니다. <br/>
           꾸준한 관심을 지켜갈 수 있는 일이 무엇일까 생각하다 프로그래밍에 닿게 되었습니다.<br/>
            이전의 경험을 지금의 환경에서 활용하며 사람들에게 편하고 쉬운 개발을 하는 개발자가 되고자 합니다. 
            <br/><br/>
             </p>
            <div id="skills">
              <div className="skill">
                <strong>Skills</strong>
                <div className="skillContent">
                  <div className="skillName">
                    <a href=""><img src={process.env.PUBLIC_URL + '/images/java.png'} alt="java" /></a>
                    <img src={process.env.PUBLIC_URL + '/images/oracle-small.png'} alt="java" />
                    <img src={process.env.PUBLIC_URL + '/images/spring.png'} alt="java" />
                    <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt="java" />
                    <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt="java" />
                    <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt="java" />
                    <img src={process.env.PUBLIC_URL + '/images/jquery-small.png'} alt="java" />
                    <img src={process.env.PUBLIC_URL + '/images/github-small.png'} alt="java" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
