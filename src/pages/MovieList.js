import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
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

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  structureList(movies) {
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { (loading) ? <Loading /> : this.structureList(movies) }
      </div>
    );
  }
}

export default MovieList;
