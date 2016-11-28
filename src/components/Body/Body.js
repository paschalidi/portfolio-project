/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Body.css';

import Feedback from '../Feedback';
import Parallax from '../Parallax';
import MouseAnimated from '../MouseAnimated';
import BodyMainContent from '../BodyMainContent';

class Body extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    const backgroundImagePath = '../../public/assets/background_bridge_edited.jpg';
    return (
      <div>
        <Parallax
          h2={'ON A MISSION TO DISCOVER MY NEXT GREAT ADVENTURE'}
          h3={'starting with this project to figure it out'}
        >
          <MouseAnimated />
        </Parallax>

        <BodyMainContent>{children}</BodyMainContent>

        <Parallax>
          <Feedback />
        </Parallax>
      </div>
    );
  }
}

export default withStyles(s)(Body);
