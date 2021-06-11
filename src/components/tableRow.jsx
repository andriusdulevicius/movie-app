import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    const { movie } = this.props;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.genre.name}</td>
        <td>
          <button onClick={() => this.props.onDelete(movie._id)} className='btn btn-danger'>
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
