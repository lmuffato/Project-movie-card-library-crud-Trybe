import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  updateState = (movie) => {
    this.setState({ movie, loading: false });
  }

  fetchMovies = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.updateState(movie);
  }

  deleteMovie = async (id) => {
    await movieAPI.deleteMovie(id);
    this.setState({ loading: true });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (<Loading />);
    }
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <p>
            <Link
              to="/"
              onClick={ () => this.deleteMovie(id) }
            >
              DELETAR
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}.isRequired;

export default MovieDetails;
