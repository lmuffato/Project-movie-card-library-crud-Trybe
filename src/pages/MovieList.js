import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  handleChange = async () => {
    this.setState({ loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: [...getMovies],
        });
      });
  }

  componentDidMount = async () => {
    this.handleChange();
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {loading
          ? <Loading loading="Carregando..." />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
      </div>
    );
  }
}

export default MovieList;
