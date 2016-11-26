// /**
//  * React Starter Kit (https://www.reactstarterkit.com/)
//  *
//  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.txt file in the root directory of this source tree.
//  */
//
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PersonalInfo.css';
import {AutoAffix , Affix} from 'react-overlays'
import {Image, Panel} from 'react-bootstrap'

class PersonalInfo extends React.Component {
  render() {
    let profileImage = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';

    return (
      <div className={s.down}>
        <Affix viewportOffsetTop={80} container={this}>
          <Panel className={s.customPanel}>
            <div>
              <Image src={profileImage} responsive circle/>
            </div>
            <div>
              <h4>
                Christos Paschalidis
              </h4>
              <h5>
                I don't love studying.<br />
                I hate studying.<br />
                I like learning.<br />
                Learning is beautiful.<br />
              </h5>
            </div>
            <div>
              <ul>
                <li>
                  <h6 className={s.newsTitle}><i className="fa fa-map-marker"/>  Berlin, DE | Patras, GR</h6>
                </li>
                <li>
                  <a target="blank" href="https://www.facebook.com/paschalidi">
                    <h6 className={s.newsTitle}><i className="fa fa-facebook"/>  Facebook</h6>
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://gr.linkedin.com/in/christos-paschalidis">
                    <h6 className={s.newsTitle}><i className="fa fa-linkedin"/>  LinkedIn</h6>
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://www.quora.com/profile/Christos-Paschalidis">
                    <h6 className={s.newsTitle}><i className="fa fa-quora"/> Quora</h6>
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://github.com/paschalidi">
                    <h6 className={s.newsTitle}><i className="fa fa-github"/>  Github</h6>
                  </a>
                </li>
                <li>
                  <a target="blank" href="http://stackoverflow.com/users/6013423/paschalidis-christos">
                    <h6 className={s.newsTitle}><i className="fa fa-stack-overflow"/>  Stackoverflow</h6>
                  </a>
                </li>
              </ul>
            </div>

          </Panel>
        </Affix>
      </div>
    );
  }
}

export default withStyles(s)(PersonalInfo);
