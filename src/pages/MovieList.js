import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getAllMovies = this.getAllMovies.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.setState({ loading: true }, async () => {
      const allMovies = await movieAPI.getMovies();
      this.setState((previousState) => ({
        movies: [...previousState.movies, ...allMovies],
        loading: false,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
