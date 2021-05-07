import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
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
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
