import React from 'react';

import Button from './Button.jsx';

class ActionBar extends React.Component {
  getActionButtons() {
    return this.props.actions.map((value, index) => {
      return (
        <Button key={index} name={value.name} action={value.action} />
      );
    });
  }

  render() {
    return (
      <div>{this.getActionButtons()}</div>
    );
  }
}

ActionBar.propTypes = {
  actions: React.PropTypes.array
};

ActionBar.defaultProps = {
  actions: []
};

export default ActionBar;
