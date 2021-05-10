import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="list">
          {
            loading
              ? <Loading />
              : movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)
          }
        </div>
        <Link className="btn btn-danger mt-4" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
