import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  fetchMovies = async () => {
    this.setState(
      { loading: true }, 
      async () => {
        const movies = await movieAPI.getMovies();
        this.setState({movies, loading: false});
      });
  }

  componentDidMount = () => {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
