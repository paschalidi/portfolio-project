import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MouseAnimated from '../MouseAnimated'
import s from './Parallax.css';

class Parallax extends React.Component {
  static propTypes = {
    h2: PropTypes.string.isRequired,
    h3: PropTypes.oneOf(['string', 'node']),
    backgroundImage: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    h2: "spread the",
    h3: <i className="fa fa-heart-o fa-3"></i>,
    backgroundImage: PropTypes.string.isRequired,
    height: "90vh"
  };

  render() {
    const {h2, h3, backgroundImage, height, children} = this.props;
    return (
      <div className={s.banner} style={{height: "100vh"}}>
        <div className={s.clip}>
          <div className={s.bgBgChrome} style={{backgroundImage: {backgroundImage}}}></div>
        </div>
        <div className={s.mainTitle}>
          <h2>{h2}</h2>
          <h3>{h3}</h3>
        </div>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Parallax);
