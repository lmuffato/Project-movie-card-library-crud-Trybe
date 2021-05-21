import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape(propTypes.object),
  title: propTypes.string,
  storyline: propTypes.string,
  id: propTypes.number,
}.isRequired;

export default MovieCard;
