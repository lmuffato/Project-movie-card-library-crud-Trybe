import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <h3 data-testid="movie-card-title">{title}</h3>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Link id={ id } to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
