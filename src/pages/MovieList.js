import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.ComeToMeMovies = this.ComeToMeMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.ComeToMeMovies();
  }

  async ComeToMeMovies() {
    const allMovies = await movieAPI.getMovies();
    this.setState({
      movies: allMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <main>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </main>
    );
  }
}

export default MovieList;
