import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import '../components/styles/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.fetchMovies(movies);
  }

  fetchMovies(movies) {
    this.setState({ loading: true }, () => {
      this.setState({
        loading: false,
        movies,
      });
    });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <div data-testid="movie-list" className="movieList">
        {
          loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
