import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
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

  listMovies = () => {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {this.listMovies()}
      </div>
    );
  }
}

export default MovieList;
