import React from 'react';

import Button from './Button.jsx';

class ListView extends React.Component {
  getHeading() {
    return (
      <thead>
        <tr>
          {Object.keys(this.props.fields).map(key => {
            return <th key={key}>{this.props.fields[key]}</th>;
          })}
          {this.props.actions.length && this.props.dataSource.length ? <th>Actions</th> : null}
        </tr>
      </thead>
    );
  }

  getRows() {
    return this.props.dataSource.map((row, index) => {
      return this.getRowFields(row, index);
    });
  }

  getEmpty() {
    return (
      <tr>
        <td colSpan={Object.keys(this.props.fields).length}>
          No data entries available.
        </td>
      </tr>
    );
  }

  getRowFields(row, key) {
    let fields = this.props.fields;

    if (!Object.keys(fields).length) {
      fields = row;
    }

    return (
      <tr key={key}>
        {Object.keys(fields).map(key => {
          return <td key={key}>{row[key]}</td>;
        })}
        {this.getRowActions(row)}
      </tr>
    );
  }

  getRowActions(row) {
    if (!this.props.actions.length) {
      return null;
    }
    
    return (
      <td>
        {this.props.actions.map((action, index) => {
          return <Button key={index} name={action.name} action={action.action.bind(null, row)} />;
        })}
      </td>
    );
  }

  render() {
    return (
      <table className="table table-bordered table-hover table-striped">
        {this.getHeading()}
        <tbody>
          {this.props.dataSource.length ? this.getRows() : this.getEmpty()}
        </tbody>
      </table>
    );
  }
}

ListView.propTypes = {
  fields: React.PropTypes.objectOf(React.PropTypes.string),
  dataSource: React.PropTypes.array,
  actions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      action: React.PropTypes.func.isRequired
    })
  )
};

ListView.defaultProps = {
  actions: [],
  fields: {},
  dataSource: []
};

export default ListView;
