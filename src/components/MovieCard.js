import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;

    return (
      <div data-testid="movie-card">
        <span>{title}</span>
        <span>{storyline}</span>
        <Link to={ `/movies/:${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}.isRequired;

export default MovieCard;
