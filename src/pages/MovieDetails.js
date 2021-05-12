import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const INITIAL_STATE = {
  title: '',
  imagePath: '',
  subtitle: '',
  storyline: '',
  genre: '',
  rating: 0,
};
class MovieDetails extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  componentDidMount = () => {
    this.movie();
  }

  getUrlId = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return id;
  }

  movie = async () => {
    const { getMovie } = movieAPI;
    const id = this.getUrlId();
    const { imagePath, title, subtitle, storyline, genre, rating } = await getMovie(id);
    this.setState({
      imagePath,
      title,
      subtitle,
      storyline,
      genre,
      rating,
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state;
    if (imagePath.length === 0) {
      return <Loading />;
    }
    return (
      <div className="movie-card" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="movie-card-body">
          <p className="movie-card-title">{`Título: ${title}`}</p>
          <p className="movie-card-subtitle">{ `Subtitulo: ${subtitle}` }</p>
          <p className="movie-card-storyline">{ `Sinopse: ${storyline}` }</p>
          <p>{ `Gênero: ${genre}` }</p>
          <div className="movie-card-rating">
            <p className="rating">{ `Avaliação: ${rating}` }</p>
          </div>
          <Link to={ `/movies/${this.getUrlId()}/edit` }>
            EDITAR
          </Link>
          <br />
          <Link to="/">
            VOLTAR
          </Link>
        </div>
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
