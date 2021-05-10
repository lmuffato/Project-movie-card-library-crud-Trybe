import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchGetMovies = this.fetchGetMovies.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovies();
  }

  async fetchGetMovies() {
    const { getMovies } = movieAPI;
    const movies = await getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new" className="add-card">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
