import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: 'loading',
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.deletarElemento = this.deletarElemento.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  deletarElemento() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  fetchMovies() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({ movie: data, status: 'busy' });
      });
  }

  render() {
    // Change the condition to check the state
    const { movie, status } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR </Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR </Link>
        <Link to="/" onClick={ this.deletarElemento }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
