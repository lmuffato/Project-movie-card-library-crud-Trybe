import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: 'Loading',
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    getMovies().then((response) => {
      const returnObject = response;
      this.setState({
        movies: returnObject,
        loading: '',
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingApi = () => {
      if (loading === 'Loading') {
        return <p>Carregando...</p>;
      }
    };

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        { loadingApi() }
      </div>
    );
  }
}

export default MovieList;
