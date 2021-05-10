import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt="imagem-filme" />
        <p>{rating}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.objectOf(Proptypes.object).isRequired,
};

export default MovieCard;
