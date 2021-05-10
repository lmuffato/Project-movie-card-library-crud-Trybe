import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

export default function MovieSinglePage({ movie, deleteCard }) {
  const { id, imagePath, title, subtitle, storyline, genre, rating } = movie;
  return (
    <div className="movie-single-page">
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <strong>{title}</strong>
      <span className="subtitle">{subtitle}</span>
      <p>{storyline}</p>
      <div className="labels">
        <span className="genre">{genre}</span>
        <span className="rating">{rating}</span>
      </div>
      <div className="buttons">
        <Link to="/" className="back-btn">VOLTAR</Link>
        <span className="modify">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <button type="button" onClick={ deleteCard }>
            <Link to="/">
              DELETAR
            </Link>
          </button>
        </span>
      </div>
    </div>
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
