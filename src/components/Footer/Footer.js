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
            <Col xsOffset={2} xs={4} smOffset={4} sm={2}><h6><Link to="/">HOME</Link></h6></Col>
            <Col xs={4} sm={2}><h6><Link to="/aboutme">ABOUT</Link></h6></Col>
          </Row>

          <Row className={s.container}>
            <SocialMedia />
          </Row>

          <Row className={s.container} style={{ letterSpacing: '2px' }}>
            <h6>
              © 2016 Christos Paschaidis. All rights reserved.
              View the <Link to="/terms">Terms & Conditions</Link>.
            </h6>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
