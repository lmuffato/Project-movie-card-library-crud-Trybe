import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.makeMovieCards = this.makeMovieCards.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({
          movies: requestMovies,
          loading: false,
        });
      },
    );
  }

  makeMovieCards(param) {
    return param.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? loadingElement : this.makeMovieCards(movies) }
      </div>
    );
  }
}

export default MovieList;
