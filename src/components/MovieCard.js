import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

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

export default MovieCard;
