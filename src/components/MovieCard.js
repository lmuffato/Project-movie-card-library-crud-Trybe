import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, number } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <span>{title}</span>
        <span>{storyline}</span>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    title: string.isRequired,
    storyline: string.isRequired,
    id: number.isRequired,
  }).isRequired,
};

export default MovieCard;
