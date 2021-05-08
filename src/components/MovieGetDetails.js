import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieGetDetails extends Component {
  render() {
    const { movies } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    return (
      <div>
        <div className="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={ `../${imagePath}` } />
          <div className="movie-card-body">
            <p className="movie-card-title">{ `Title: ${title}` }</p>
            <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
          </div>
          <div className="movie-card-rating">
            <p>{ `Rating: ${rating}` }</p>
          </div>
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
