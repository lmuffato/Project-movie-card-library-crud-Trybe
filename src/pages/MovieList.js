import React, { Component } from 'react';
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
    // Render Loading here if the request is still happening
    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { loading ? <Loading /> : (
          <div data-testid="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          </div>
        ) }
      </div>
    );
  }
}
export default MovieList;
