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
    this.showFilms();
  }

  async showFilms() {
    const response = await movieAPI.getMovies();
    this.setState({ movies: response, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      // Source: https://github.com/tryber/sd-08-project-movie-cards-library-crud/tree/ailsonjr-project-movie-card-library-crud
      <div data-testid="movie-list">
        {
          loading ? <Loading /> : movies
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
