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
import { Row, Col, Grid } from 'react-bootstrap';

import s from './BodyMainContent.css';
import PersonalInfo from '../PersonalInfo';
import SocialMedia from '../SocialMedia';

class BodyMainContent extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <Grid>
        <Row>
          <Col smHidden xsHidden xs={12} md={3}> <PersonalInfo /> </Col>
          <Col xsHidden mdHidden lgHidden sm={12}> <br /><SocialMedia /> </Col>
          <Col xs={12} md={6}> {children} </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(BodyMainContent);
