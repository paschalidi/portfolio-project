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
import { Navbar, Nav } from 'react-bootstrap';
import s from './HeaderNavigation.css';
import Link from '../Link';
import LinkItem from '../LinkItem';

class HeaderNavigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <Navbar fixedTop>

        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Portoflio</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkItem href={'/about'}> About </LinkItem>
            <LinkItem href={'/contact'}> Contact </LinkItem>
            <LinkItem href={'/login'}> Log in </LinkItem>
            <LinkItem href={'/register'} styles={s.highlight}> Sign Up </LinkItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(HeaderNavigation);
