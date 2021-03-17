import React, { Component } from 'react'
import Icon from '../icon';

export default class Timeline extends Component {
  render() {
    return (
      <div id="timeline-box">
        <div id="title3">
          <h3>TIMELINE</h3>
          <div id="timeline">
             <div className="timeline-content 1">
               <div className="timeline-icon 1">
                 <Icon color="#9adbd5" size={30} icon="bookmark" />
                 <span>2020.09 - 2021.03</span>
               </div>
               <div className="timeline-desc">
                  <p>
                    스프링 프레임워크 기반 풀스택 개발자 양성 과정 수료
                  </p>
               </div>
            </div>
             <div className="timeline-content 2">
               <div className="timeline-icon 2">
                 <Icon color="#9adbd5" size={30} icon="bookmark" />
                 <span>2020.02 - 2020.05</span>
               </div>
               <div className="timeline-desc">
                  <p>
                    (주)유트랙스 - 주임, 영업부
                  </p>
               </div>
            </div>
             <div className="timeline-content 3">
               <div className="timeline-icon 3">
                 <Icon color="#9adbd5" size={30} icon="bookmark" />
                 <span>2017.02 - 2019.10</span>
               </div>
               <div className="timeline-desc">
                  <p>
                    (주)기산과학 - 주임, 영업부
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
