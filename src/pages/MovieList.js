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
      loading: false,
    };
  }

  fetchMovies = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const request = await movieAPI.getMovies();
      // console.log(request);
      this.setState({
        loading: false,
        movies: [...request],
      });
    });
  }

  componentDidMount = async () => {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <h1 className="movie-listH1">Movie List</h1>
        <div className="movie-list" data-testid="movie-list">
          {loading ? <Loading loading="Carregando..." /> : movies
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <div className="add-card">
          <Link className="links" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
