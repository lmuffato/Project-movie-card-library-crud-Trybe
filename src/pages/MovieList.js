import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
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
    this.fetchMoviesApi();
  }

  async fetchMoviesApi() {
    this.setState({ loading: true }, async () => {
      const getMoviesReturn = await movieAPI.getMovies();
      this.setState({
        movies: getMoviesReturn,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return !loading ? (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    ) : (<Loading />);
  }
}

export default MovieList;
