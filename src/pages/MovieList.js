import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

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

  fetchMovies = async () => {
    const { getMovies } = movieAPI;
    const requestReturn = await getMovies();
    this.setState({ movies: [...requestReturn] });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.length ? movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />))
          : <Loading />}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
