import React, { Component } from 'react';
import './style/MovieList.css';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: [],
    };

    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState({ loading: true }, async () => {
      const Movies = await movieAPI.getMovies();
      this.setState({
        movies: Movies,
        loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div className="main">
        <div className="link-list">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        { loading ? <Loading /> : (
          <div data-testid="movie-list" className="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
        ) }
      </div>
    );
  }
}
export default MovieList;
