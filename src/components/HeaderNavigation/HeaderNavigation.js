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
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
            <Link to="/">Betta World</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkItem href={'/aboutme'}> About </LinkItem>
            <NavItem href="https://github.com/paschalidi"><i className="fa fa-fw fa-github" style={{ color: '#171516' }} /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(HeaderNavigation);
