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
      loading: true,
    };
  }

  componentDidMount() {
    this.takeMoviesFromApi();
  }

  takeMoviesFromApi = () => {
    this.setState({
      loading: true,
    }, async () => {
      const movieFromApi = await movieAPI.getMovies();
      this.setState({
        movies: movieFromApi,
        loading: false,
      });
    });
  }

  pageToRender = () => {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  };

  render() {
    return (
      <div data-testid="movie-list">
        { this.pageToRender() }
      </div>
    );
  }
}

export default MovieList;
