import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <h2>
          { title }
        </h2>
        <p>
          { storyline }
        </p>
        <div className="card-link">
          <Link className="link" to={ `/movies/${id}` }>Ver Detalhes</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}.isRequired;

export default MovieCard;
