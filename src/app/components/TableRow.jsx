import React from 'react';

class TableRow extends React.Component {
  getFields() {
    return Object.keys(this.props.fields).map(key => {
      // TODO: Make this configurable.
      if (key === '_id' || key === '__v') return null;

      return <td key={key}>{this.props.fields[key]}</td>;
    });
  }

  getActions() {
    return this.props.actions.map((action, index) => {
      return <button key={index} className="btn btn-primary btn-sm" onClick={action.action.bind(null, this.props.fields)}>{action.name}</button>
    });
  }

  render() {
    return (
      <tr>
        {this.getFields()}
        <td>
          {this.getActions()}
        </td>
      </tr>
    );
  }
}

export default TableRow;
