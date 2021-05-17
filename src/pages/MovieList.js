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
      loading: true,
    };
  }

  componentDidMount() {
    this.getAllMovies();
  }

   getAllMovies = async () => {
     const moviesList = await movieAPI.getMovies();
     this.setState({
       movies: moviesList,
       loading: false,
     });
   }

  renderMovies = () => {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new"> ADICIONAR CARTÃO</Link>
        {loading ? <Loading /> : this.renderMovies()}
      </div>
    );
  }
}

export default MovieList;
