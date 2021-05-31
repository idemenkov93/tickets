import React from 'react';

class Checkbox extends React.Component {
  getClassName() {
    return 'checkbox' + (this.props.error ? ' has-error' : '');
  }

  getTooltipAttributes() {
    if (this.props.error) {
      return {
        'data-toggle': 'tooltip',
        'data-placement': 'right',
        title: this.props.error
      };
    } else {
      return null;
    }
  }

  onChange(event) {
    this.props.onChange(this.props.name, event.target.checked);
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <label {...this.getTooltipAttributes()}>
          <input
            type="checkbox"
            onChange={this.onChange.bind(this)}
            defaultChecked={this.props.checked}
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false
};

export default Checkbox;
