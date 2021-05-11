import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import { getMovies } from '../services/movieAPI';
import { union } from '../fp-library/union';

const Type = union('loading', 'loaded');

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      status: Type.loading,
    };
  }

  componentDidMount = () => this.fetchData()

  fetchData = () => this.setState({ status: Type.loading }, () => {
    getMovies().then((data) => {
      this.setState({ movies: data, status: Type.loaded });
    });
  })

  renderMovies = (movies) => (
    <div data-testid="movie-list">
      {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
    </div>
  )

  render = () => {
    const { movies, status } = this.state;
    return status.match({
      loading: <Loading />,
      loaded: this.renderMovies(movies),
    });
  }
}

export default MovieList;
