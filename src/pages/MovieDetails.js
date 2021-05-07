import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.filmes();
  }

  filmes = async () => {
    const { match: { params: { id } } } = this.props;
    const film = await movieAPI.getMovie(id);
    this.setState({
      movie: film,
      loading: false,
    });
  };

  render() {
    const { movie: {
      title, storyline, imagePath, genre, rating, subtitle }, loading } = this.state;
    const { match: { params: { id } } } = this.props;
    const cardDetails = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{title}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          to="/"
          onClick={ () => {
            movieAPI.deleteMovie(id);
          } }
        >
          DELETAR
        </Link>
      </div>);
    return (
      loading ? <Loading /> : cardDetails
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
