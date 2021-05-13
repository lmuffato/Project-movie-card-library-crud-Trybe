import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/MovieDetails.css';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
      shouldRedirect: false,
    };
  }

  fetchMovie = () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      async () => {
        const movieFromAPI = await movieAPI.getMovie(id);
        this.setState({
          movie: movieFromAPI,
          loading: false,
        });
      },
    );
  }

  renderMovieDetails = () => {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <div className="movie-info">
          <img
            alt="Movie Cover"
            src={ `../${imagePath}` }
            className="movie-image"
          />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="details-buttons">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link onClick={ this.deleteMovieBtn } to="/">
            DELETAR
          </Link>
        </div>
      </div>
    );
  }

  deleteMovieBtn = () => {
    const { movie } = this.state;
    const { id } = movie;

    movieAPI.deleteMovie(id).then(() => this.setState({ shouldRedirect: true }));
  }

  componentDidMount = () => {
    this.fetchMovie();
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    return (
      <div>
        {loading ? <Loading /> : this.renderMovieDetails()}
        {shouldRedirect ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.number),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
