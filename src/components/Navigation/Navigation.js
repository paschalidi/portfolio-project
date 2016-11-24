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
import s from './Navigation.css';

import logoUrl from './logo-small.png';

import Link from '../Link';
import LinkItem from '../LinkItem';
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <Navbar fixedTop>

        <Navbar.Header>
          <Navbar.Brand>
            {/*<Link to="/"><img src={logoUrl} width="38" height="38" alt="React"/> </Link>*/}
            <Link to="/">Portoflio</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkItem href={"/about"}     children={'About'} />
            <LinkItem href={"/login"}     children={'Log in'} />
            <LinkItem href={"/register"}  children={'Sign Up'} styles={s.highlight}/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
