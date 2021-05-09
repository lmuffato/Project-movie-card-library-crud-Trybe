import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.mudaEstado();
  }

  mudaEstado = async () => {
    this.setState({ loading: true },
      async () => {
        const request = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: [...request],
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <section>
        <div data-testid="movie-list">
          {loading ? <Loading loadingTxt="Carregando..." /> : movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </section>
    );
  }
}

export default MovieList;
