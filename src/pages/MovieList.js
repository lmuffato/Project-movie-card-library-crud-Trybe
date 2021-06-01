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
      load: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const list = await movieAPI.getMovies();
    this.setState({
      movies: list,
      load: false,
    });
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">

        { load
          ? <Loading />
          : (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
