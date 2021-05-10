import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.loading = true;

    this.state = {
      loading: true,
      movie: [],
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async componentDidMount() {
    this.loading = false;
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.fetchMovie(movie);
  }

  componentWillUnmount() {
    this.setState = () => {
      this.loading = false;
    };
  }

  fetchMovie(movie) {
    this.setState({ loading: true }, () => {
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { loading, movie } = this.state;
    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details" className="movieDetails">
        <Card className="cardDetail">
          <Card.Img src={ `../${imagePath}` } alt="Movie Cover" />
          <Card.Body>
            <Card.Title>
              { title }
            </Card.Title>
            <Card.Subtitle className="storyline">
              { subtitle }
            </Card.Subtitle>
            <Card.Subtitle className="storyline">
              { storyline }
            </Card.Subtitle>
            <Card.Subtitle>
              { genre }
            </Card.Subtitle>
            <Card.Text>
              { rating }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link
              to="/"
              onClick={ async () => {
                await movieAPI.deleteMovie(id);
              } }
            >
              DELETAR

            </Link>
          </Card.Footer>
        </Card>

      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MovieDetails;
