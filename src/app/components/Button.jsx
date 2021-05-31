import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-secondary"
        onClick={this.props.action}
        disabled={this.props.disabled}
      >
        {this.props.name}
      </button>
    );
  }
};

export default Button;
