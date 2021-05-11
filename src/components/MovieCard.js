import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card" className="movieCard">
        <img src={ imagePath } alt={ title } className="movieCard__img" />
        <span className="movieCard__title">{ title }</span>
        <div className="movieCard__span">
          <span>{ storyline }</span>
        </div>
        <div className="movieCard__link">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    id: 0,
    title: '',
    imagePath: '',
    storyline: '',
  },
};
