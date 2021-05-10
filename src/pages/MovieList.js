import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async getMovies() {
    this.setState({ movies: await movieAPI.getMovies(), loading: false })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, loading } = this.state;
    
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          { loading ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
        { loading ? null : <Link to="/movies/new" className="link-btn">ADICIONAR CARTÃO</Link>}
      </div>
    );
  }
}

export default MovieList;
