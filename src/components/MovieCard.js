import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="img" />
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
