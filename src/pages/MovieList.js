import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      load: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({
      load: true,
    });
    const responseMovies = await movieAPI.getMovies();
    this.setState(({ movies }) => ({
      movies: [...movies, ...responseMovies],
      load: false,
    }));
  }

  render() {
    const { movies, load } = this.state;
    // Render Loading here if the request is still happening
    const isLoad = load;
    return (
      <div data-testid="movie-list">
        {isLoad ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
