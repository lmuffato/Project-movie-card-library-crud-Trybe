import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.handleMovie();
  }

  handleMovie = async () => {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies()
        .then((data) => {
          this.setState({ movies: data, loading: false });
        });
    });
  }

  listMovies(movieCard) {
    return (
      <div data-testid="movie-list">
        {movieCard.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return loading ? <Loading /> : this.listMovies(movies);
  }
}

export default MovieList;
