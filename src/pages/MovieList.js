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
    this.loadMovies();
  }

  async loadMovies() {
    const getMovie = await movieAPI.getMovies();
    this.setState({ movies: getMovie, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <section>
        <div data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
      </section>
    );
  }
}

export default MovieList;
