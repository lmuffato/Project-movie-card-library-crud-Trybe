import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.requestMovies();
  }

  requestMovies = async () => {
    const filmes = await movieAPI.getMovies();
    this.setState({
      movies: filmes,
      loading: false,
    });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list" className="movieList-parent">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
