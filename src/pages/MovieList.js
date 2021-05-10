import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import Header from '../components/Header';
import plus from '../img/plus.png';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestMovies,
        });
      },
    );
  }

  render() {
    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
    };
    const { movies, loading } = this.state;

    return (

      <div>
        <Header />
        <div className="add-movie-link">
          <Link style={ linkStyle } to="/movies/new">
            <img src={ plus } alt="Imagem Adicionar" />
            ADICIONAR CARTÃO
          </Link>
        </div>
        <div className="movie-list" data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        </div>
      </div>
    );
  }
}

export default MovieList;
