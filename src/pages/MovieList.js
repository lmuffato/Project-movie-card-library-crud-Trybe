import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then(
      (selectedMovies) => this.setState({ movies: selectedMovies }),
    );
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
