import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieGetDetails extends Component {
  render() {
    const { movies } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    return (
      <div>
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      </div>
    );
  }
}

MovieGetDetails.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    genre: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};
