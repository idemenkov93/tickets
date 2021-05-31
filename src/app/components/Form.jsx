import React from 'react';

import TextField from './TextField.jsx';
import Textarea from './Textarea.jsx';
import ActionBar from './ActionBar.jsx';
import FormError from './FormError.jsx';
import PasswordField from './PasswordField.jsx';
import Datepicker from './Datepicker.jsx';
import Switcher from './Switcher.jsx';
import Checkbox from './Checkbox.jsx';
import Dropdown from './Dropdown.jsx';

const formFields = {
  textField: TextField,
  textarea: Textarea,
  passwordField: PasswordField,
  datepicker: Datepicker,
  switcher: Switcher,
  checkbox: Checkbox,
  dropdown: Dropdown
};

class Form extends React.Component {
  onChange(field, value) {
    this.props.onChange({field, value});
  }

  getFormError() {
    return this.props.error ? <FormError message={this.props.error} /> : null;
  }

  getFields() {
    return (
      Object.keys(this.props.fields).map((key, index) => {
        const field = this.props.fields[key];

        return React.createElement(formFields[field.type], {
          key: index,
          name: key,
          ...field.params,
          onChange: this.onChange.bind(this)
        });
      })
    );
  }

  getActionBar() {
    const actions = [];

    if (this.props.submit) {
      actions.push({
        name: this.props.submit.name,
        action: this.props.submit.action
      });
    }

    if (this.props.cancel) {
      actions.push({
        name: this.props.cancel.name,
        action: this.props.cancel.action
      });
    }

    return actions.length ? <ActionBar actions={actions} /> : null;
  }

  render() {
    return (
      <form>
        {this.getFormError()}
        {this.getFields()}
        {this.getActionBar()}
      </form>
    );
  }
}

Form.propTypes = {
  error: React.PropTypes.string,
  fields: React.PropTypes.objectOf(
    React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      params: React.PropTypes.object.isRequired
    })
  ),
  submit: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    action: React.PropTypes.func.isRequired
  }),
  cancel: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    action: React.PropTypes.func.isRequired
  })
};

Form.defaultProps = {
  fields: {}
};

export default Form;
