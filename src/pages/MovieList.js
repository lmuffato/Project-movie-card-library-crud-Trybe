import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    this.setMovies();
  }

  setMovies = async () => {
    const moviesList = await getMovies();
    this.setState({ movies: moviesList });
  }

  mountPage = () => {
    const { movies } = this.state;
    return (
      <div>
        <div className="movieList">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
        <Link className="adicionaCartao" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        <header className="header"><h1>My Movie List</h1></header>
        {
          movies.length === 0
            ? <Loading />
            : this.mountPage()
        }
        <footer className="footer">Created by Lucas André/2021</footer>
      </div>
    );
  }
}

export default MovieList;
