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
import ContactMe from '../ContactMe';
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
          height={85}
          backgroundImagePath={backgroundImagePath}
        >
          <MouseAnimated />
        </Parallax>

        <BodyMainContent>{children}</BodyMainContent>

        <Parallax
          h2={'I CAN HELP'}
          h3={'i am currently available for freelance work'}
          p={'The fact that you made it this far fills me with joy that you liked what you saw, and if you are interested in working with me on a project or have an idea you would just like to discuss please don`t hesitate to drop me a message or call me..'}
          height={80}
          backgroundImagePath={backgroundImagePath}
        >
        </Parallax>
      </div>
    );
  }
}

export default withStyles(s)(Body);
