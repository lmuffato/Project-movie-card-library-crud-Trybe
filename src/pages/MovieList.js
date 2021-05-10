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
    this.handleMovies();
  }

  handleMovies = async () => {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies()
        .then((data) => {
          this.setState({ movies: data, loading: false });
        });
    });
  }

  showMovies(movies) {
    return (
      <>
        <Link to="/movies/new" className="add-card">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }

  render() {
    const { movies, loading } = this.state;

    return loading ? <Loading /> : this.showMovies(movies);
  }
}

export default MovieList;

// Para entender onde colocar o loading, consultei o PR do colega Rafael Medeiros:
// https://github.com/tryber/sd-010-a-project-movie-card-library-crud/pull/67/files
// Ideia de colocar Link para Adicionar novo card em MovieList retirada do PR do colega João Nascimento:
// https://github.com/tryber/sd-010-a-project-movie-card-library-crud/pull/65/files
// Acredito que faça mais sentido e, assim, evita que este link seja renderizado nas outras rotas/páginas do projeto
