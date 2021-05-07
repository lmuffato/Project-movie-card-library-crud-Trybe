import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

import '../App.css';

class MovieList extends Component {
  constructor() {
    super();

    this.loadAndRenderMovies = this.loadAndRenderMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loading: true }, async () => {
      const requestMovies = await movieAPI.getMovies();
      this.setState({
        movies: requestMovies,
        loading: false,
      });
    });
  }

  loadAndRenderMovies() {
    const { movies, loading } = this.state;
    return loading
      ? <Loading />
      : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    return (
      <div className="movie-list" data-testid="movie-list">
        {this.loadAndRenderMovies()}
      </div>
    );
  }
}

export default MovieList;
