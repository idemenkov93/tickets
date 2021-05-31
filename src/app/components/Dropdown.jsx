import React from 'react';

class Dropdown extends React.Component {
  getLabel() {
    if (this.props.label) {
      return <label className="form-control-label">{this.props.label}</label>;
    } else {
      return null;
    }
  }

  getClassName() {
    return 'form-group' + (this.props.error ? ' has-error' : '');
  }

  getTooltipAttributes() {
    if (this.props.error) {
      return {
        'data-toggle': 'tooltip',
        'data-placement': 'right',
        'title': this.props.error
      }
    } else {
      return null;
    }
  }

  getPlaceholder() {
    return this.props.placeholder !== undefined ? <option disabled value="">{this.props.placeholder}</option> : '';
  }

  getOptions() {
    return this.props.options.map((option, index) => {
      return <option key={index} value={option.value}>{option.label}</option>;
    });
  }

  onChange(event) {
    this.props.onChange(this.props.name, event.target.value);
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.getLabel()}
        <select
          onChange={this.onChange.bind(this)}
          defaultValue={this.props.value}
          className="form-control"
          {...this.getTooltipAttributes()}
        >
          {this.getPlaceholder()}
          {this.getOptions()}
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    label: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  }))
};

Dropdown.defaultProps = {
  value: '',
  options: []
};

export default Dropdown;
