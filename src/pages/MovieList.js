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

    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesAPI = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesAPI,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (
      loading ? <Loading />
        : (
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
        )
    );
  }
}

export default MovieList;
