import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContactMe.css';

class ContactMe extends React.Component {

  render() {
    return (
      <div className={s.caption}>
        <span className={s.border}>DROP ME A MESSAGE</span>
      </div>
    );
  }
}

export default withStyles(s)(ContactMe);
