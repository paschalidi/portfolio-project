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
import s from './HeaderBanner.css';

class HeaderBanner extends React.Component {
  render() {
    return (
      <div className={s.container }>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>React</h1>

          <p className={s.bannerDesc}>Complex web apps made easy</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBanner);
