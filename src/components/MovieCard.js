import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleValue: 0,
    };
  }

  mouseEnter = () => {
    this.setState({ scaleValue: 1 });
  };

  mouseLeave = () => {
    this.setState({ scaleValue: 0 });
  }

  render() {
    const { scaleValue } = this.state;
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div
        className="movie-card"
        id="movie-card"
        data-testid="movie-card"
        onMouseEnter={ this.mouseEnter }
        onMouseLeave={ this.mouseLeave }
      >
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <h4 data-testid="movie-card-title" className="title">{title}</h4>
        <div className="movie-card-body">
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div
          className="movie-link-container"
          style={ { transform: `scaleY(${scaleValue})` } }
        >
          <Link
            className="movie-details-link"
            to={ `/movies/${id}` }
          >
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
