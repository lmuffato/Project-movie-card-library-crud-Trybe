import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, rating, imagePath } = movie;
    const idLink = `/movies/${id}`;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          alt="Movie Cover"
          className="movie-card-image"
          src={ imagePath }
        />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating" data-testid="rating">
          <span className="rating">{rating}</span>
          <Link className="verDetalhes" to={ idLink }>Ver detalhes</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
