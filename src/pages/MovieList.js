import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard, Loading } from '../components';
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
    this.setState(
      { loading: true },
      async () => {
        const movies = await movieAPI.getMovies();
        this.setState({ movies, loading: false });
      },
    );
  }

  componentDidMount = () => {
    this.fetchMovies();
  }

  renderPageContent = () => {
    const { movies } = this.state;
    return (
      <>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderPageContent()}
      </div>
    );
  }
}

export default MovieList;
