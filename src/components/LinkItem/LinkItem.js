import React, { PropTypes } from 'react';
import cx from 'classnames';
import Link from '../Link';

class LinkItem extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    disabled: false,
  };

  render() {
    const { className, href, active, disabled, children, onClick } = this.props;
    return (
      <li role="presentation" className={cx(className, { active, disabled })}>
        <Link to={href} onClick={onClick}>
          {children}
        </Link>
      </li>
    );
  }
}

export default LinkItem;
