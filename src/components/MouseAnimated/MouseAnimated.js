import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MouseAnimated.css';

class MouseAnimated extends React.Component {
  render() {
    return (
      <div className={s.scrollBtn}>
        <div className={s.mouse}>
          <span> </span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MouseAnimated)
