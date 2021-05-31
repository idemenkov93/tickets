import React from 'react';

class Textarea extends React.Component {
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
  
  render() {    
    return (
      <div className={this.getClassName()}>
        {this.getLabel()}
        <textarea 
          className="form-control"
          value={this.props.value}
          placeholder={this.props.placeholder}
          {...this.getTooltipAttributes()} 
        />
      </div>
    );
  }
}

export default Textarea;
