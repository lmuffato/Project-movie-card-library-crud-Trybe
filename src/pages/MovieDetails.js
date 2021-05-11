import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      movieId: null,
    };
  }

  componentDidMount() {
    this.fetchMovieApi();
  }

  async fetchMovieApi() {
    // Para a requisição pelo id, contei com o auxílio do pull request do Luciano Amâncio;
    const { match: { params: { id } } } = this.props;
    const getMovieReturn = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovieReturn,
      loading: false,
      movieId: id,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading, movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return !loading ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movieId}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    ) : (<Loading />);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default MovieDetails;
