import React, { Component } from 'react';

class TableHeader extends Component {

  // Props Requested
  // columns: array
  // sortColumn: object
  // onSort: function

  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;

    const el = sortColumn.order === "asc"
      ? "fa fa-sort-asc"
      : "fa fa-sort-desc";

    return <i className={el} aria-hidden="true"></i>
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => {
            return (
              <th className="clickable"
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label} {this.renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;