import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import '../style/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };
  }

  fetchMovieList = () => {
    this.setState(
      { loading: true }, // atualização de estado
      async () => {
        const movieListFromAPI = await movieAPI.getMovies();
        this.setState({
          movies: movieListFromAPI,
          loading: false,
        });
      },
    );
  }

  renderMovieList = () => {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <div className="header">
          <h1 className="library-title">Movie Library</h1>
          <Link
            to="/movies/new"
            className="add-movie"
          >
            ADICIONAR CARTÃO
          </Link>
        </div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchMovieList();
  }

  render() {
    const { loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div>
        {loading ? <Loading /> : this.renderMovieList()}
      </div>
    );
  }
}

export default MovieList;
