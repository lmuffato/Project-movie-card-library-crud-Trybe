import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

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
    this.fetchApi();
  }

  async fetchApi() {
    this.setState(
      { loading: true },
      async () => {
        const result = await movieAPI.getMovies();
        this.setState({
          movies: result,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    const elementLoading = <span>Carregando...</span>;

    return (
      <div data-testid="movie-list">
        { loading
          ? elementLoading
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
