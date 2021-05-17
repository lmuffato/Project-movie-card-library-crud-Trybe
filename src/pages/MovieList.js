import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
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
    this.fetchMoviesApi();
  }

  async fetchMoviesApi() {
    this.setState({ loading: true }, async () => {
      const fetchMoviesRet = await movieAPI.getMovies();
      this.setState({
        movies: [...fetchMoviesRet],
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return !loading ? (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    ) : (<Loading />);
  }
}

export default MovieList;
