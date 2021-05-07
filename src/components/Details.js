import React from 'react';
import { string, number, shape, objectOf } from 'prop-types';

const Details = ({
  movie: {
    title,
    storyline,
    imagePath,
    genre,
    rating,
    subtitle },
}) => (
  <div>
    <img alt="Movie Cover" src={ `../${imagePath}` } />
    <p>{ `Title: ${title}` }</p>
    <p>{ `Subtitle: ${subtitle}` }</p>
    <p>{ `Storyline: ${storyline}` }</p>
    <p>{ `Genre: ${genre}` }</p>
    <p>{ `Rating: ${rating}` }</p>
  </div>
);

Details.propTypes = {
  movie: objectOf(shape({
    title: string.isRequired,
    storyline: string.isRequired,
    imagePath: string.isRequired,
    genre: string.isRequired,
    rating: number.isRequired,
    subtitle: string.isRequired,
  })).isRequired,
};

export default Details;
