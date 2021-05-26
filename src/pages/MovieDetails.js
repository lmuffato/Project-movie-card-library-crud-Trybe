import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: true,
      movieId: '',
    };
  }

  DidUpdate(id) {
    console.log('component', id);
    this.apiMovie(id);
  }

  async apiMovie(id) {
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({
      isLoaded: false,
      movieId: selectedMovie,
    });
    console.log('function', selectedMovie);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movieId, isLoaded } = this.state;
    this.DidUpdate(id);
    console.log('render', this.state);
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (isLoaded) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = movieId;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link
            to={ {
              pathname: `/movies/${id}/edit`,
              state: { id },
            } }
          >
            EDITAR
          </Link>
          <br />
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
