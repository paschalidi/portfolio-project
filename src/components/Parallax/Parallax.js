import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Parallax.css';
import img from '../../public/assets/background_lamps.jpg';

class Parallax extends React.Component {
  static propTypes = {
    h2: PropTypes.string,
    h3: PropTypes.string,
    p: PropTypes.string,
    backgroundImagePath: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    h2: null,
    h3: null,
    p: null,
    backgroundImagePath: PropTypes.string,
    height: '90vh',
  };

  render() {
    const { h2, h3, p, backgroundImagePath, height, children } = this.props;

    return (
      <div className={s.banner} style={{ height: `${height}vh` }}>
        <div className={s.clip}>
          <div className={s.bgBgChrome} style={{ backgroundImage: `url(${img})` }} />
        </div>
        <div className={s.mainTitle}>
          <h2>{h2}</h2>
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Parallax);
