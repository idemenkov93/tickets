import React from 'react';

import TableRow from './TableRow.jsx';
import ActionBar from './ActionBar.jsx';

class Table extends React.Component {
  getRows() {
    return this.props.rows.map((row, index) => {
      return <TableRow key={index} fields={row} actions={this.props.itemActions} />;
    });
  }

  getHeading() {
    return this.props.heading.map((value, index) => {
      return <th key={index}>{value}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          <ActionBar actions={this.props.actions} />
        </div>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              {this.getHeading()}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
