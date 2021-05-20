import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eachmovie: '',
      loading: true,
    };
  }

  componentDidMount() {
    return this.requestMovie();
  }

  requestMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const theMovie = await getMovie(id);
    this.setState({
      eachmovie: theMovie,
      loading: false,
    });
  }

  render() {
    const { loading, eachmovie } = this.state;
    const { match: { params: { id } } } = this.props;
    const address = `/movies/${id}/edit`;
    const { title, storyline, imagePath, genre, rating, subtitle } = eachmovie;
    const movieDetail = (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link
          to="/"
          onClick={ movieAPI.deleteMovie(eachmovie) }
        >
          DELETAR
        </Link>
        <Link
          to={ address }
        >
          EDITAR
        </Link>
        <Link
          to="/"
        >
          VOLTAR
        </Link>
      </>
    );
    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : movieDetail }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
