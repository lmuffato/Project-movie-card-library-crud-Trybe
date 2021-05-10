import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
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
    movieAPI.getMovies()
      .then((movies) => this.setState({
        movies,
        loading: false,
      }));
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list" className="container-movies">
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
