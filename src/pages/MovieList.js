import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
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
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>

        <section data-testid="movie-list" className="movieList">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </section>
      </div>
    );
  }
}

export default MovieList;
