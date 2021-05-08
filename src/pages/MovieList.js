import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: false,
    };

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState({
        movies,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading message="Carregando..." />;
    }

    return (
      <div className="container-movies" data-testid="movie-list">
        <Link to="/movies/new" className="btn btn-primary my-3">ADICIONAR CARTÃO</Link>
        <div className="box-movies">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
