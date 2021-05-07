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
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState(
      { loading: true },
      () => {
        movieAPI.getMovies()
          .then((valor) => {
            this.setState({
              movies: valor,
              loading: false,
            });
          });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    console.log(movies);

    return (
      <div data-testid="movie-list">
        {loading ? <span>Carregando...</span>
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
