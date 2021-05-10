import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieSinglePage({ movie }) {
  const { id, imagePath, title, subtitle, storyline, genre, rating } = movie;
  return (
    <>
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <strong>{title}</strong>
      <p>{subtitle}</p>
      <p>{storyline}</p>
      <p>{genre}</p>
      <p>{rating}</p>
      <div className="buttons">
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    </>
  );
}

MovieSinglePage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }),
}.isRequired;
