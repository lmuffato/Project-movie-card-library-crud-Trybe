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

  async fetchMovies() {
    const requestReturn = await movieAPI.getMovies();
    this.setState({
      movies: requestReturn,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {(movies.length === 0)
          ? <Loading>Carregando...</Loading>
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
