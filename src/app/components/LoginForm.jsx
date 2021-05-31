import React from 'react';

import Form from './../components/Form.jsx';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4 offset-xs-4 sign-in-form" >
          <Form{...this.props}/>
        </div>
      </div>
    );
  }
};

export default LoginForm;