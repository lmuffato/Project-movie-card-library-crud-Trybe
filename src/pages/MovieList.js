import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
// import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.setMovies = this.setMovies.bind(this);
  }

  componentDidMount() {
    this.setMovies();
    // console.log(this.state);
  }

  async setMovies() {
    const moviesApi = await movieAPI.getMovies();
    this.setState((state) => ({ movies: [...state.movies, moviesApi] }));
    // console.log(this.state);
  }

  render() {
    const { movies } = this.state;
    console.log(movies, 'Movie do Render');

    // Render Loading here if the request is still happening
    // <Loading />

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
