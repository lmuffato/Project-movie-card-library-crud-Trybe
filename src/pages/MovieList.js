import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.insertMoviesOnState = this.insertMoviesOnState.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const requestMovies = await getMovies()
      .then((response) => this.insertMoviesOnState(response));
    return requestMovies;
  }

  insertMoviesOnState(arrayMovies) {
    this.setState({ movies: arrayMovies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { loading && <Loading /> }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
