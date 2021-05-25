import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { movies } = this.state;
    const loadedMovies = await movieAPI.getMovies();
    movies.push(...loadedMovies);
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
