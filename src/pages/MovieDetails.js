import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: false,
      id: '',
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  removeMovie = () => {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      () => {
        movieAPI.getMovie(id)
          .then((valor) => {
            this.setState({
              movie: valor,
              loading: false,
              id,
            });
          });
      },
    );
  }

  render() {
    const { loading, movie, id } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) {
      return (
        <Loading />
      );
    }

    return (
      <main className="main-content">
        <div data-testid="movie-details" className="movie-card-detail">
          <p className="movie-card-detail-title">{ `${title}` }</p>
          <p className="movie-card-detail-subtitle">{ `${subtitle}` }</p>
          <img alt="Movie Cover" src={ `../${imagePath}` } className="movie-detail-img" />
          <p className="movie-card-detail-storyline">{ `${storyline}` }</p>
          <div className="movie-card-detail-bottom">
            <p className="movie-card-detail-genre">{ `Genre: ${genre}` }</p>
            <p className="movie-card-detail-rating">{ `Rating: ${rating}` }</p>
          </div>
          <div className="btn-container">
            <Link to={ `/movies/${id}/edit` } className="button">EDITAR</Link>
            <Link to="/" className="button">VOLTAR</Link>
            <Link to="/" onClick={ this.removeMovie } className="button">DELETAR</Link>
          </div>
        </div>
      </main>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
