import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieGetDetails from '../components/MovieGetDetails';

class MovieDetails extends Component {
  constructor() {
    super();

    this.getMovie = this.getMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { getMovies } = movieAPI;
    const result = await getMovies();
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const obj = result.find((m) => m.id === parseInt(id, 10));
    this.setState({ movies: obj });
  }

  removeMovie() {
    const { movies } = this.state;
    const { deleteMovie } = movieAPI;
    deleteMovie(movies.id);
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-details">
        { movies ? <Loading show={ false } /> : <Loading show /> }
        { movies ? <MovieGetDetails movies={ movies } /> : '' }
        <Link to="/">
          VOLTAR
        </Link>
        <Link to={ `/movies/${movies.id}/edit` }>
          EDITAR
        </Link>
        <Link to="/" onClick={ this.removeMovie }>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
