import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.recoverGetmovies();
  }

  async recoverGetmovies() {
    const gotMovies = await movieAPI.getMovies();
    this.setState({
      movies: [...gotMovies],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      loading ? <Loading /> : (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      )
    );
  }
}

export default MovieList;
