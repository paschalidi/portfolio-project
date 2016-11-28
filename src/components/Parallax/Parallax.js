import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Parallax.css';

class Parallax extends React.Component {
  static propTypes = {
    h2: PropTypes.string.isRequired,
    h3: PropTypes.oneOf(['string', 'node']),
    backgroundImagePath: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    h2: 'spread the',
    h3: <i className="fa fa-heart-o fa-3" />,
    backgroundImagePath: PropTypes.string.isRequired,
    height: '90vh',
  };

  render() {
    const { h2, h3, backgroundImagePath, height, children } = this.props;
    // TODO make background and heigh Dynamic with values backgroundImage and height.
    const backgroundImage = require('../../public/assets/background_bridge_edited.jpg');
    // const backgroundImage = require({backgroundImagePath});

    return (
      <div className={s.banner} style={{ height: '100vh' }}>
        <div className={s.clip}>
          <div className={s.bgBgChrome} style={{ backgroundImage: 'url(' + backgroundImage + ')' }} />
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
