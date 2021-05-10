import React, { Component } from 'react';
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
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((data) => {
        this.setState({ movies: data, loading: false });
      });
    });
  }

  renderMovies(movies) {
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { movies, loading } = this.state;
    return loading ? <Loading /> : this.renderMovies(movies);
  }
}

export default MovieList;
