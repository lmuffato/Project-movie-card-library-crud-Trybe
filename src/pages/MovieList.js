import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovieApi = this.getMovieApi.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getMovieApi();
  }

  getMovieApi() {
    const { getMovies } = movieAPI;
    this.setState(
      { loading: true },
      async () => {
        const moviesList = await getMovies();
        this.setState({
          movies: moviesList,
          loading: false,
        });
      },
    );
  }

  renderContent() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderContent()}
      </div>
    );
  }
}

export default MovieList;
