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

import LinkItem from '../LinkItem';
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <Navbar fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkItem className={s.brand} href={"/"}>
              <img src={logoUrl} width="38" height="38" alt="React"/>
              <span className={s.brandTxt}>Your Company</span>
            </LinkItem>
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
    // return (
    //   <div className={cx(s.root, this.props.className)} role="navigation">
    //     <Link className={s.link} to="/about">About</Link>
    //     <Link className={s.link} to="/login">Log in</Link>
    //     <span className={s.spacer}>or</span>
    //     <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
    //   </div>
    // );
  }
}

export default withStyles(s)(Navigation);
