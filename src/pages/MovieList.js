import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.newMethod().setState({
      movies: response,
    });
  }

  newMethod() {
    return this;
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    if (movies.length === 0) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
