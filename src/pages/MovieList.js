import React, { Component } from 'react';
import { Loading } from '../components';
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
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.length === 0
          ? <Loading />
          : movies.map((movie) => (
            <MovieCard
              key={ movie.title }
              movie={ movie }
              title={ movie.title }
              storyline={ movie.storyline }
              image={ movie.imagePath }
              id={ movie.id }
            />
          ))}
      </div>
    );
  }
}

export default MovieList;
