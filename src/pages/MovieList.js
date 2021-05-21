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
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    const pageLoading = <h2>Carregando...</h2>;

    return (
      <div data-testid="movie-list">
        { loading ? pageLoading
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
