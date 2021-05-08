import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const results = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: [...results],
      });
    });
  }

  render() {
    const { movies } = this.state;
    const { loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <span>{ loading }</span>
        {loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
