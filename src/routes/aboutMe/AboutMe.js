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
import s from './AboutMe.css';

class AboutMe extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.textSelection}>
          <div className={s.h0}>
            <span className={s.textSelection}> I AM A </span>
            <span className={s.textInvisible}> DREAMER</span>
            Write to your dream audience.
            Highlight the kind of work you want to be doing.
            Tell the truth in your own voice.
            Read it aloud to make sure it sounds like you.
            Treat it as a draft. Share it early and update it regularly.

            WHO AM I


          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AboutMe);
