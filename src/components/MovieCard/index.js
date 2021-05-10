import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <div className="info">
          <div className="container">
            <strong>{movie.title}</strong>
            <span>{movie.subtitle}</span>
            <p>{movie.storyline}</p>
            <footer className="details">
              <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
