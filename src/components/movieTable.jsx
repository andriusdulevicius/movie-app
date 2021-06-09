import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div>
        <h3>Movie table is here</h3>
        <ol>
          {this.state.movies.map((movie) => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default MovieTable;
