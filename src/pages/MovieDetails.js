import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.handleMovieRender = this.handleMovieRender.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleMovieRender() {
    const { match } = this.props;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      margin: '0 10px',
    };
    return (
      <div className="movie-card-details">
        <div className="movie-card-body-details">
          <img
            className="movie-card-image-details "
            alt="Movie Cover"
            src={ `../${imagePath}` }
          />
          <h1 className="movie-card-title-details ">{`Title: ${title}`}</h1>
          <p className="movie-card-subtitle-details">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline-details">{`Storyline: ${storyline}`}</p>
          <p className="genre-details">{`Genre: ${genre}`}</p>
          <p className="movie-card-rating-details">{`Rating: ${rating}`}</p>
          <div>
            <Link
              style={ linkStyle }
              to={ `/movies/${match.params.id}/edit` }
            >
              EDITAR

            </Link>
            <Link
              style={ linkStyle }
              onClick={ this.handleDeleteMovie }
              to="/"
            >
              DELETAR

            </Link>
            <Link style={ linkStyle } to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }

  async handleDeleteMovie() {
    const { match } = this.props;
    await movieAPI.deleteMovie(match.params.id);
  }

  async fetchMovie() {
    const { match } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const requestMovie = await movieAPI.getMovie(match.params.id);
        this.setState({
          loading: false,
          movie: requestMovie,
        });
      },
    );
  }

  render() {
    const { loading, shouldRedirect } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.handleMovieRender()}
        {shouldRedirect && <Redirect to="/" />}
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),

  }).isRequired,
};

export default MovieDetails;
