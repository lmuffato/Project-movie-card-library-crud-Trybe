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
    this.requireAPI();
  }

  requireAPI = () => {
    this.setState(({
      loading: true,
    }), async () => {
      const response = await movieAPI.getMovies();
      this.setState(({
        movies: response,
        loading: false,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    const elementLoading = <div>Carregando...</div>;

    return (
      <div data-testid="movie-list">
        {
          loading ? elementLoading
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
