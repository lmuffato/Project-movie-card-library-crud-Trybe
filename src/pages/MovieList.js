import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

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
    this.fetchMovieApi();
  }

    fetchMovieApi = () => {
      this.setState({
        loading: true,
      }, async () => {
        const response = await movieAPI.getMovies();
        this.setState({
          movies: response,
          loading: false,
        });
      });
    };

    renderPage = () => {
      const { movies, loading } = this.state;

      if (loading) return <Loading />;

      return (
        <div>
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      );
    };

    render() {
      return (
        <div data-testid="movie-list">
          { this.renderPage() }
        </div>
      );
    }
}

export default MovieList;
