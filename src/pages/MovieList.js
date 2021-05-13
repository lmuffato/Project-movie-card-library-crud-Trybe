import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieCard } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
