import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.findShowMovies();
  }

  async findShowMovies() {
    this.setState({ loading: true }, async () => {
      const returnMovies = await movieAPI.getMovies();
      this.setState({
        movies: [...returnMovies],
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      loading ? <Loading /> : (
        <div>
          <Header />
          <div data-testid="movie-list" className="movieList">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
            <div className="Addcard">
              <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            </div>
          </div>
        </div>
      ));
  }
}

export default MovieList;
