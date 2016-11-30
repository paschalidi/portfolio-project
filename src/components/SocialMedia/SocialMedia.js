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
import { Col } from 'react-bootstrap';
import s from './SocialMedia.css';

class SocialMedia extends React.Component {
  render() {
    return (
      <div className={s.social}>
        <Col sm={2}>
          <a
            href="mailto:paschalidi@ceid.upatras.gr"
            className={`${s.link} ${s.mail}`} target="blank"
          >
            <span className="fa fa-envelope" />
          </a>
        </Col>
        <Col sm={2}>
          <a
            href="https://gr.linkedin.com/in/christos-paschalidis"
            className={`${s.link} ${s.linkedin}`} target="blank"
          >
            <span className="fa fa-linkedin-square" />
          </a>
        </Col>
        <Col sm={2}>
          <a
            href="https://www.facebook.com/paschalidi"
            className={`${s.link} ${s.facebook}`} target="blank"
          >
            <span className="fa fa-facebook-square" />
          </a>
        </Col>
        <Col sm={2}>
          <a
            href="https://gr.linkedin.com/in/christos-paschalidis"
            className={`${s.link} ${s.quora}`} target="blank"
          >
            <span className="fa fa-quora" />
          </a>
        </Col>
        <Col sm={2}>
          <a
            href="http://stackoverflow.com/users/6013423/paschalidis-christos"
            className={`${s.link} ${s.stackoverflow}`} target="blank"
          >
            <span className="fa fa-stack-overflow" />
          </a>
        </Col>
        <Col sm={2}>
          <a
            href="https://github.com/paschalidi"
            className={`${s.link} ${s.github}`} target="blank"
          >
            <span className="fa fa-github-square" />
          </a>
        </Col>
      </div>
    );
  }
}

export default withStyles(s)(SocialMedia);
