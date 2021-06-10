import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import TableRow from './tableRow';

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
          <tbody>
            {this.state.movies.map((movie) => (
              <TableRow key={movie._id} movie={movie} onDelete={() => this.deleteMovie(movie._id)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  deleteMovie(id) {
    this.setState({ movies: this.state.movies.filter((m) => m._id !== id) });
  }
}

export default MovieTable;
