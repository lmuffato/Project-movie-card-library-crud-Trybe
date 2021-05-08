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
    this.setState({
      loading: true,
    }, async () => {
      const request = await movieAPI.getMovies();
      console.log(request);
      this.setState({
        loading: false,
        movies: [...request],
      });
    });
  }

  componentDidMount = async () => {
    this.fetchMovies();
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        <h1>Movie List</h1>
        <span>{ loading }</span>
        {loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
