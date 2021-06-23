import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="card">
        <div className="card-body">
          <h3 className="card-title">{ title }</h3>
          <p className="card-text">{ storyline }</p>
        </div>
        <img
          src={ imagePath }
          alt={ `Capa do filme ${title}` }
          width="100%"
          height="300px"
          className="card-img-bottom"
        />
        <small className="text-muted">{`Capa do filme ${title}` }</small>
        <Link to={ `/movies/${id}` } className="btn btn-secondary">
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
