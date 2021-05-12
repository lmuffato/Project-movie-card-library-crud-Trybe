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
  }

  componentDidMount() { // feito com a ajudo dos colegas Lucas, Mauricio Willian
    this.renderizaApi();
  }

  renderizaApi() { // essa função tras a API com o Fech e insere no state o resultado
    movieAPI.getMovies()
      .then((data) => {
        this.setState({
          loading: false, // aquie modifica o loading para false assim que tem os dados da
          movies: data,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
