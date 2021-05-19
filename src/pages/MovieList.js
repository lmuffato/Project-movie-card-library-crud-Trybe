import React, { Component } from 'react';
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
    console.log(movies);
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
      <section data-testid="movie-list" className="movieList">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
