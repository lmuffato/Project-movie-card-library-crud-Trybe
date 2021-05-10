import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const data = await movieAPI.getMovies();
    this.setState({
      movies: data,
    });
  }

  render() { // REQUISITO 2
    const { movies } = this.state;
    const loading = movies.length; // array vazio, usamos length para saber se há algo

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {/* requisito 6 */}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
