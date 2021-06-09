import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    const { movies: mv } = this.state;
    if (mv.length === 0) return <div className='alert alert-warning'> There are no movies on sale at the moment.</div>;
    return (
      <div className='movie-table'>
        <h3> Please see our movies:</h3>
        <p>Showing {mv.length} movies in our store</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Rental Rate</th>
              <th scope='col'>Number in Stock</th>
              <th scope='col'>Genre</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>{this.generateTableBody()}</tbody>
        </table>
      </div>
    );
  }

  generateTableBody() {
    const res = this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.genre.name}</td>
        <td>
          <button onClick={() => this.deleteMovie(movie._id)} className='btn btn-danger'>
            X
          </button>
        </td>
      </tr>
    ));
    return res;
  }

  deleteMovie(id) {
    this.setState({ movies: this.state.movies.filter((m) => m._id !== id) });
  }
}

export default MovieTable;
