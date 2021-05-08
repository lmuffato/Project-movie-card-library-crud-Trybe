import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovie = this.getMovie.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { getMovies } = movieAPI;
    const result = await getMovies();
    this.setState({ movies: result });
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div>
        <Link to="/movies/new">
          ADICIONAR CARTÃO
        </Link>
        <div data-testid="movie-list">
          { movies.length > 0 ? <Loading show={ false } /> : <Loading show /> }
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

export default MovieList;
