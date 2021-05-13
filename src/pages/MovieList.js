import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = async () => {
    const { getMovies } = movieAPI;
    const data = await getMovies();
    this.setState({
      movies: data,
      isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      isLoading ? <Loading /> : (

        <div data-testid="movie-list">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
        </div>

      )
    );
  }
}

export default MovieList;
