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
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{title}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div className="edit-buttons">
          <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
          <Link onClick={ this.handleDeleteMovie } to="/">DELETAR</Link>
          <Link to="/">VOLTAR</Link>
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
