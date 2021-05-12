import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <img className="movieCardImg" src={ `${imagePath}` } alt="MovieImage" />
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape,
}.isRequired;

export default MovieCard;
