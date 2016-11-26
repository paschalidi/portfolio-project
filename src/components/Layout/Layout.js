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
import s from './Layout.css';

import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import PersonalInfo from '../PersonalInfo';
import Parallax from '../Parallax';
import MouseAnimated from '../MouseAnimated';

import { Row, Col, Grid } from 'react-bootstrap'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const backgroundImage = require('../../public/assets/welcome_page_background.jpg')
    return (
      <div>
        <Header />
        <Parallax h2={'ON A MISSION TO DISCOVER MY NEXT GREAT ADVENTURE'}
                  h3={'starting with this project to figure it out'}
                  backgroundImage={backgroundImage}
        >
          <MouseAnimated />
        </Parallax>
        <Grid>
          <Row>
            <Col smHidden xsHidden xs={12} md={3}> <PersonalInfo /> </Col>
            <Col xs={12} md={6}> {this.props.children} </Col>
          </Row>
        </Grid>
        <Parallax backgroundImage={backgroundImage} >
          {/*TODO PUT HERE THE ASK QUESTON | GIVE FEEDBACK*/}
        </Parallax>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Layout);
