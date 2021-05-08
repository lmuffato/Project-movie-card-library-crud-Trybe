import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;

    return (
      <div className="card mb-3" data-testid="movie-card">
        <img src={ imagePath } alt={ title } className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-title">{subtitle}</h5>
          <p className="card-text">{storyline}</p>
        </div>
        <div className="card-footer">
          <Link to={ `movies/${id}` } className="btn btn-primary">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
