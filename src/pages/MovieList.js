import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    // console.log('constructor');
    this.state = {
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    // console.log('componetDidMount');
    this.fetchMovies();
  }

  async fetchMovies() {
    const listMovies = await movieAPI.getMovies();
    this.setState({
      movies: listMovies,
    });
  }

  render() {
    // console.log('render');
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { movies.length > 0
          ? movies.map((movie) => (
            <MovieCard
              key={ movie.title }
              movie={ movie }
            />))
          : <Loading /> }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
