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
      gotMovies: false,
    };
  }

  componentDidMount() {
    console.log('MovieList has just mounted');
    movieAPI.getMovies().then((movies) => this.setState({ movies, gotMovies: true }));
  }

  render() {
    const { movies, gotMovies } = this.state;

    return !gotMovies ? <Loading /> : (
      <div data-testid="movie-list">
        {(
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
