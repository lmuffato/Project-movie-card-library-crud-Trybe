import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import '../styles/movieList.css';

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
    this.fetchMovies();
  }

  updateState = (movies) => {
    this.setState({ movies, loading: false });
  }

  fetchMovies = async () => {
    const movies = await movieAPI.getMovies();
    this.updateState(movies);
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (<Loading />);
    }

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
