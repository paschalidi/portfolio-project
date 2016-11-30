/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Grid } from 'react-bootstrap';

import s from './Footer.css';
import Link from '../Link';
import SocialMedia from '../SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Grid>
          <Row className={s.container}>
            <SocialMedia />
          </Row>

          <Row className={s.container}>
            <Col xs={12} sm={3}><Link to="/">HOME</Link></Col>
            <Col xs={12} sm={3}><Link to="/about">ABOUT</Link></Col>
            <Col xs={12} sm={3}><Link to="/contact">CONTACT</Link></Col>
            <Col xs={12} sm={3}><Link to="/privacy">PRIVACY POLICY</Link></Col>
          </Row>

          <Row className={s.container} style={{ letterSpacing: '2px' }}>
            <span>for more information, </span>
            <span>
              <a href="mailto:paschalidi@ceid.upatras.gr" target="_blank" rel="noopener noreferrer">
                contact me
              </a>
            </span>
          </Row>

          <Row className={s.container} style={{ letterSpacing: '2px' }}>
            <h6>© 2016 Christos Paschaidis. All rights reserved. </h6>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
