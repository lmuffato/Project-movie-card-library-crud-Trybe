import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.handleMovies = this.handleMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.handleMovies();
  }

  handleMovies() {
    movieAPI.getMovies().then((movies) => this.setState({
      movies,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {
          loading ? <Loading />
            : movies
              .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
