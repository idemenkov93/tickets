import React from 'react';

import TopNavigationItem from './TopNavigationItem.jsx';

class TopNavigation extends React.Component {
  getItems() {
    return this.props.items.map((item, index) => {
      return <TopNavigationItem key={index} {...item} />;
    });
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
        <a className="navbar-brand" href={this.props.brand.url}>{this.props.brand.title}</a>
        <ul className="nav navbar-nav">
          {this.getItems()}
        </ul>
      </nav>
    );
  }
}

export default TopNavigation;
