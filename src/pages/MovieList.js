import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      movies: [],
      isLoaded: true,
    };
  }

  componentDidMount() {
    this.api();
  }

  async api() {
    const resolve = await movieAPI.getMovies();
    console.log(resolve);
    this.setState({
      isLoaded: false,
      movies: resolve,
    });
  }

  render() {
    console.log('didMount', this.state);
    const { isLoaded, movies } = this.state;
    console.log('render', movies);
    // Render Loading here if the request is still happening
    if (isLoaded) {
      return <Loading />;
    }

    return (
      <>
        <header className="movie-card-header">
          <div className="page-title">
            Movie Cards - CRUD
            <br />
          </div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </header>
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }
}

export default MovieList;
