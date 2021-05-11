import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { storyline, title, id } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.string,
  imagePath: PropTypes.string,
  bookmarked: PropTypes.string,
  genre: PropTypes.string,
}.isRequired;

export default MovieCard;
