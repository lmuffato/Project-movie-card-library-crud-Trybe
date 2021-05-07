import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

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
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
