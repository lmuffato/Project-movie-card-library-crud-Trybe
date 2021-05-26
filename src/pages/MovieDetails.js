import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movieDetails: [],
    };
  }

  componentDidMount() {
    this.fetchGetMovieFromApiComponent();
  }

  apiDeleteMovie = (id) => {
    movieAPI.deleteMovie(id);
  }

  fetchGetMovieFromApiComponent = async () => {
    const { match: { params: { id } } } = this.props;
    const responseMovieDetails = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movieDetails: responseMovieDetails,
    });
  }

  render() {
    const { movieDetails, loading } = this.state;
    const { id, title, subtitle, storyline, imagePath, genre, rating } = movieDetails;
    if (loading === true) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR </Link>
        <Link to="/">VOLTAR </Link>
        <Link to="/" onClick={ () => { this.apiDeleteMovie(id); } }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
