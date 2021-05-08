import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ movie.title }</p>
        <p>{ movie.storyline }</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default MovieCard;
