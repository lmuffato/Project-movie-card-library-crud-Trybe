import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../../services/movieAPI';

import Loading from '../../components/Loading';
import MovieCard from '../../components/MovieCard';

import './styles.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };

    this.requestMovies = this.requestMovies.bind(this);
  }

  componentDidMount() {
    this.requestMovies();
  }

  async requestMovies() {
    const { getMovies } = movieAPI;
    const movies = await getMovies();
    this.setState({
      movies,
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new" className="add-card">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
