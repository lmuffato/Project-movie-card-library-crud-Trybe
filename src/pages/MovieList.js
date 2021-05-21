import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovies();
        this.setState({
          movies: response,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {loading && 'Carregando...'}
      </div>
    );
  }
}

export default MovieList;
