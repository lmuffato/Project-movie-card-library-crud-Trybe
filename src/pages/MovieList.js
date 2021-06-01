import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
// import { movieAPI } from '../tests/helpers';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

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
    const fetchedMovies = await movieAPI.getMovies();
    this.setState({
      movies: fetchedMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      loading ? <Loading /> : (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      )
    );
  }
}

export default MovieList;
