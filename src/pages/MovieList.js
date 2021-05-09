import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

// eslint-disable-next-line
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  async getMovies() {
    this.setState({ movies: await movieAPI.getMovies(), })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.length === 0 ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
