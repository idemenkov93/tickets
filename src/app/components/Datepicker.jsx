import React from 'react';
import moment from 'moment';

class Datepicker extends React.Component {
  getLabel() {
    if (this.props.label) {
      return <label className="form-control-label">{this.props.label}</label>;
    } else {
      return null;
    }
  }

  getClassName() {
    return 'form-group' + (this.props.error ? ' has-danger' : '') + ' ui-toolkit-datepicker';
  }

  getTooltipAttributes() {
    if (this.props.error) {
      return {
        'data-toggle': 'tooltip',
        'data-placement': 'right',
        'data-trigger': 'manual',
        title: this.props.error
      };
    } else {
      return null;
    }
  }

  onChange() {
    this.props.onChange(this.props.name, moment($(this.refs.datepicker).datepicker('getDate')).startOf('date').toISOString());
  }

  componentDidMount() {
    $(this.refs.datepicker).datepicker({dateFormat: this.props.format, onSelect: this.onChange.bind(this)});
    $(this.refs.datepicker).datepicker('setDate', moment(this.props.defaultValue).toDate());
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.getLabel()}
        <div
          ref="container"
          className="input-group"
          {...this.getTooltipAttributes()}
        >
          <input
            ref="datepicker"
            className="form-control"
            onChange={this.onChange.bind(this)}
            placeholder={this.props.placeholder}
            readOnly
          />
          <div className="input-group-addon">
            <i className="icon-calendar"></i>
          </div>
        </div>
      </div>
    );
  }
}

Datepicker.propTypes = {
  format: React.PropTypes.string
};

Datepicker.defaultProps = {
  format: 'dd/mm/yy'
};

export default Datepicker;
