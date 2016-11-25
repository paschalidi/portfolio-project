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

import { Row, Col, Grid } from 'react-bootstrap'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <PersonalInfo />
            </Col>
            <Col xs={12} md={6}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Layout);
