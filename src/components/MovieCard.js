import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card" className="movieCard">
        <h3>{ title }</h3>
        <img alt={ title } src={ imagePath } />
        <span>{ storyline }</span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
