import React from 'react';
import PropTypes from 'prop-types';
import { link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
