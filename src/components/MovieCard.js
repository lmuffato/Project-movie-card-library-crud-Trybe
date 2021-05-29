import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // genre: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // subtitle: PropTypes.string.isRequired,
};

export default MovieCard;
