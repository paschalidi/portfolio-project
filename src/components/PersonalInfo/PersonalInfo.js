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
import {AutoAffix} from 'react-overlays'
import {Panel} from 'react-bootstrap'

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className={s.down}>
        <AutoAffix viewportOffsetTop={80} container={this}>
          <Panel className={s.noBorder}>
            <div className={s.profilePicture}></div>
            <div>
              <h4>
                Christos Paschalidis
              </h4>
              <div>
                I don't love studying.<br />
                I hate studying.<br />
                I like learning.<br />
                Learning is beautiful.<br />
              </div>
            </div>
            <div>
              <table>
                <tbody>
                <tr>
                  <td><h6><i className="fa fa-fw fa-map-marker"/>Berlin, DE | Patras, GR </h6></td>
                </tr>
                <tr>
                  <td>
                    <h6><a target="blank" href="https://www.facebook.com/paschalidi">
                      <i className="fa fa-fw fa-facebook" style={{color: '#3b5998'}}/>Facebook
                    </a></h6>
                  </td>
                </tr>
                <tr>
                  <td><h6><a target="blank" href="https://gr.linkedin.com/in/christos-paschalidis">
                    <i className="fa fa-fw fa-linkedin" style={{color: '#007bb6'}}/>LinkedIn
                  </a></h6></td>
                </tr>
                <tr>
                  <td><h6><a target="blank" href="https://www.quora.com/profile/Christos-Paschalidis">
                    <i className="fa fa-fw fa-quora" style={{color: '#A82400'}}/>Quora
                  </a></h6></td>
                </tr>
                <tr>
                  <td>
                    <h6><a target="blank" href="https://github.com/paschalidi">
                      <i className="fa fa-fw fa-github" style={{color: '#171516'}}/>Github
                    </a></h6></td>
                </tr>
                <tr>
                  <td><h6><a target="blank" href="http://stackoverflow.com/users/6013423/paschalidis-christos">
                    <i className="fa fa-fw fa-stack-overflow" style={{color: '#fe7a15'}}/>Stackoverflow
                  </a></h6></td>
                </tr>
                </tbody>
              </table>
            </div>
          </Panel>
        </AutoAffix>
        <div style={{height: "100vh"}}/>
      </div>
    );
  }
}

export default withStyles(s)(PersonalInfo);
