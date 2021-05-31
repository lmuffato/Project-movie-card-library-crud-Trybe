import React from 'react';
import { Link } from 'react-router-dom';
import { Object, Number, String } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Object,
  id: Number,
  title: String,
  storyline: String,
}.isRequired;

export default MovieCard;
