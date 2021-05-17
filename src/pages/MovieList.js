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
    };
  }

  componentDidMount() {
    this.request();
  }

  request = async () => {
    const { getMovies } = movieAPI;
    const result = await getMovies();
    this.setState({ movies: [...result] });
  };

  render() {
    const { movies } = this.state;
    const movieTrue = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>);

    return (
      <section>{(movies.length) ? movieTrue : <Loading />}</section>
    );
  }
}

export default MovieList;
