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
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PersonalInfo.css';
import {AutoAffix} from 'react-overlays'

class PersonalInfo extends React.Component {
  render() {
    return (
      <div>
        <AutoAffix viewportOffsetTop={80} container={this}>
          <div className='panel panel-default'>
            <div className='panel-body'>
              I am an affixed element
              I am an affixed element
              I am an affixed element
              I am an affixed element
              I am an affixed element
              I am an affixed element
              I am an affixed element
              I am an affixed element
              I am an affixed element
            </div>
          </div>
        </AutoAffix>
        <div style={{height: "4000px"}}/>
      </div>
    );
  }
}

export default PersonalInfo;
