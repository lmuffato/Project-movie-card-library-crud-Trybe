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
      loaded: true,
    };
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    const getMovies = await movieAPI.getMovies();
    this.setState({ movies: getMovies, loaded: false });
  }

  render() {
    const { movies, loaded } = this.state;

    if (loaded) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <button type="button">
          <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
        </button>
      </div>
    );
  }
}

export default MovieList;
