import React from 'react';

class FormError extends React.Component {
  render() {
    return (
      <p>{this.props.message}</p>
    );
  }
}

export default FormError;
