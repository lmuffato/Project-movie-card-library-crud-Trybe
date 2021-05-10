import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    movieAPI.getMovies()
      .then((data) => {
        this.setState({
          movies: data,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) { return <Loading />; }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
