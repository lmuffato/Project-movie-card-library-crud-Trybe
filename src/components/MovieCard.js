import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MovieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card" className="movieCard">
        <Card>
          <Card.Img src={ imagePath } />
          <Card.Body>
            <Card.Title>
              { title }
            </Card.Title>
            <Card.Subtitle className="storyline">
              { storyline }
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <Link to={ `movies/${id}` }>VER DETALHES</Link>
          </Card.Footer>
        </Card>
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
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
