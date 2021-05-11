import React, { Component } from 'react';
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
    this.fetchAPI();
  }

  async fetchAPI() {
    this.setState(
      ({ loading: true }),
      async () => {
        const request = await movieAPI.getMovies();
        this.setState({
          movies: request,
          loading: false,
        });
      },
    );
  }

  render() {
    const loadingElement = <div>Carregando...</div>;
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement
          : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
