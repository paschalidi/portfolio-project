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
import ps from 'public/public.css';

class HeaderBanner extends React.Component {
  render() {
    return (
      <div>
        <div className={s.parallax}></div>
        <div className={s.caption}>
          <span className={s.border}>SCROLL DOWN</span>
        </div>
      </div>
    );
  }
}

export default withStyles(s, ps)(HeaderBanner);
