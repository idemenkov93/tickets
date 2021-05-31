import React from 'react';

class Switcher extends React.Component {
  getClassName() {
    return 'switcher' + (this.props.error ? ' has-error' : '');
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
      <div>
        {this.props.label}
        <div className="onoffswitch">
          <label className="onoffswitch-label" {...this.getTooltipAttributes()}>
            <input 
              type="checkbox" 
              className="onoffswitch-checkbox" 
              onChange={this.onChange.bind(this)} 
              defaultChecked={this.props.checked}
            />
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
          </label> 
        </div>
      </div>  
    );
  }
}

Switcher.propTypes = {
  checked: React.PropTypes.bool
};

Switcher.defaultProps = {
  checked: false
};

export default Switcher;