import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div id="about-box">
        <div>
          <h3>Who am I?</h3>
          <div id="content-box">
            <strong>생각하는 개발자 윤진주 입니다.</strong><br />
            <p>
              늘 새로운 것에 관심이 많고 배우길 좋아합니다. 긍정적이고 발전하는 삶을 위해 노력합니다.
          </p>
            <div id="skills">
              <div className="skill 1">
                <div className="skillIcon 1">
                </div>
                <div className="skillContent 1">
                 <div className="skillName">
                    <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt="java"/>
                    <img src={process.env.PUBLIC_URL + '/images/jquery-small.png'} alt="java"/>
                    <img src={process.env.PUBLIC_URL + '/images/oracle-small.png'} alt="java"/>
                 </div>
                 <div className="skillName">
                    <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt="java"/>

                 </div>
                 <div className="skillName">
                    <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt="java"/>
                </div>
                 </div>
              </div>
              <div className="skill 2">
                <div className="skillContent 2">
                    <img src={process.env.PUBLIC_URL + '/images/java.png'} alt="java"/>
                  Nunc dui urna, ultricies sit amet finibus ac, malesuada vitae libero. Fusce bibendum libero et diam mollis faucibus. Integer nec nisl porta, tempus diam vitae, commodo tortor. Nam porta urna eu tortor aliquet, eu vehicula metus vulputate. Mauris nec venenatis justo. Phasellus erat nisl, pharetra accumsan neque eu, rhoncus auctor arcu. Cras vitae augue nisi. Donec eget luctus tellus, at tempus libero. Vestibulum bibendum tellus leo, nec lacinia orci auctor et.
              </div>
              </div>
              <div className="skill 3">
                <div className="skillContent 3">
                  Nunc dui urna, ultricies sit amet finibus ac, malesuada vitae libero. Fusce bibendum libero et diam mollis faucibus. Integer nec nisl porta, tempus diam vitae, commodo tortor. Nam porta urna eu tortor aliquet, eu vehicula metus vulputate. Mauris nec venenatis justo. Phasellus erat nisl, pharetra accumsan neque eu, rhoncus auctor arcu. Cras vitae augue nisi. Donec eget luctus tellus, at tempus libero. Vestibulum bibendum tellus leo, nec lacinia orci auctor et.
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
