import React, { Component } from 'react';
import { shape, number, string } from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    id: number,
    title: string,
    storyline: string,
  }).isRequired,
};

export default MovieCard;
