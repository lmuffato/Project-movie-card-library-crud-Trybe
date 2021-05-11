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
      loading: true,
    };
  }

  componentDidMount() {
    this.moviesRequest();
  }

  async moviesRequest() {
    const request = await movieAPI.getMovies();

    this.setState({
      movies: request,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return (<Loading />);

    return (
      <>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
