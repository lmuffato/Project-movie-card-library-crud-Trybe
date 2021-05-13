import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/movieDetails.css';
import { deleteMovie } from '../services/movieAPI';

export default class Detail extends Component {
  functionDelete = async (film) => {
    console.log(film);
    const functionDel = await deleteMovie(film);
    console.log(functionDel);
    return functionDel;
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-container">
        <div className="container-image">
          <img className="img" alt="Movie Cover" src={ `../${movie.imagePath}` } />
          <p className="movie-title">{`${movie.title}`}</p>
        </div>
        <div className="text-container">
          <p className="movie-subtitle">{ `Subtitle: ${movie.subtitle}` }</p>
          <p className="movie-storyline">{ `Storyline: ${movie.storyline}` }</p>
          <p className="movie-genre">{ `Genre: ${movie.genre}` }</p>
          <p className="movie-rating">{ `Rating: ${movie.rating}` }</p>
          <div className="buttons">
            <Link className="button-back" to="/">VOLTAR</Link>
            <Link className="button-edit" to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
            <Link
              className="button-delete"
              to="/"
              onClick={ () => this.functionDelete(movie.id) }
            >
              DELETAR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
Detail.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
