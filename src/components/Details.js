import React from 'react';
import { Link } from 'react-router-dom';
import { string, number, shape, objectOf, func } from 'prop-types';

const Details = ({
  movie: {
    title,
    storyline,
    imagePath,
    genre,
    rating,
    subtitle },
  id,
  onClick,
}) => (
  <div>
    <img alt="Movie Cover" src={ `../${imagePath}` } />
    <p>{ `Title: ${title}` }</p>
    <p>{ `Subtitle: ${subtitle}` }</p>
    <p>{ `Storyline: ${storyline}` }</p>
    <p>{ `Genre: ${genre}` }</p>
    <p>{ `Rating: ${rating}` }</p>

    <Link to="/">VOLTAR</Link>
    <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
    <Link onClick={ onClick } to="/">DELETAR</Link>
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
  id: number.isRequired,
  onClick: func.isRequired,
};

export default Details;
