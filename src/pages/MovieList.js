import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const response = await movieAPI.getMovies();

    this.setState({ movies: response });
  }

  renderMovies(movies) {
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        { movies.length > 1 ? this.renderMovies(movies) : <p>Carregando...</p> }
      </div>
    );
  }
}

export default MovieList;
