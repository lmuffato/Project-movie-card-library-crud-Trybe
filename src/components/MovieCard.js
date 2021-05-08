import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { image, title, storyline } = this.props;
    return (
      <div data-testid="movie-card">
        <img
          src={ image }
          alt={ `${title} cover` }
        />
        <h3>{title}</h3>
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
}.isRequired;

export default MovieCard;
