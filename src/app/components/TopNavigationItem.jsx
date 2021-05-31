import React from 'react';

class TopNavigationItem extends React.Component {
  getClassName() {
    return 'nav-item' + (this.props.isActive ? ' active' : '');
  }

  render() {
    return (
      <li className={this.getClassName()}>
        <a className="nav-link" href={this.props.url}>{this.props.label}</a>
      </li>
    );
  }
}

TopNavigationItem.propTypes = {
  url: React.PropTypes.string,
  label: React.PropTypes.string.isRequired
};

TopNavigationItem.defaultProps = {
  url: '#',
  label: ''
};

export default TopNavigationItem;
