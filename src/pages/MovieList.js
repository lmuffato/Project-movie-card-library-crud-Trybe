import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    movieAPI.getMovies()
      .then((data) => {
        this.setState({ movies: data });
      });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <Loading />
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
