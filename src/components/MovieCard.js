import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>
          { title }
        </h2>
        <p>
          { subtitle }
        </p>

        <Link to={ `/movies/:${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}.isRequired;

export default MovieCard;
