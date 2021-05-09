import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieDetailsComp from '../components/MovieDetailsComp';

class MovieDetails extends Component {
  constructor() {
    super();

    this.gettingMovie = this.gettingMovie.bind(this);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.gettingMovie();
  }

  async gettingMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const gotMovie = await getMovie(id);
    this.setState({
      movie: gotMovie,
    });
  }

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const { id } = match.params;

    return (
      <div data-testid="movie-details-btns">
        {movie.title === undefined ? <Loading /> : <MovieDetailsComp movie={ movie } />}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
