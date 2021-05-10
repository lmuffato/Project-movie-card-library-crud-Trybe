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
      isLoading: false,
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    this.setState({ isLoading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState({ isLoading: false, movies });
    });
  };

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <section className="movie-galery">
        <section className="movie-list" data-testid="movie-list">
          {
            isLoading
              ? <Loading />
              : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </section>
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </section>

    );
  }
}

export default MovieList;
