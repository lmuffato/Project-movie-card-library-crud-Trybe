import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ imagePath } />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Link
            to={ {
              pathname: `/movies/${id}`,
              state: { id },
            } }
          >
            VER DETALHES
          </Link>
        </div>
        <div>{ rating }</div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
