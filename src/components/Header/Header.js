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
import s from './Header.css';
import Navigation from '../Navigation';
import HeaderBanner from '../HeaderBanner';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeaderBanner />
      </div>
    );
  }
}

export default Header;