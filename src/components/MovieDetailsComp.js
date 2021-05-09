import React from 'react';
import PropTypes from 'prop-types';

export default class MovieDetailsComp extends React.Component {
  render() {
    const { movie } = this.props;
    const { storyline, imagePath, genre, rating, subtitle, title } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath} ` } />
        <h2>{`Title: ${title} `}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

MovieDetailsComp.propTypes = {
  movie: PropTypes.shape({
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
