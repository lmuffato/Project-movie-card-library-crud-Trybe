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
    this.newMethod();
  }

  newMethod() {
    movieAPI.getMovies()
      .then((data) => {
        this.setState({
          movies: data,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
      </div>
    );
  }
}

export default MovieList;
