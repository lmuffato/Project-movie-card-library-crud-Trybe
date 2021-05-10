import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

/**
 * Consultei o repositório do Renzo Sevilha para resolver essa classe.
 * Link: https://github.com/tryber/sd-010-a-project-movie-card-library-crud/blob/renzosev-project-movie-card-library-crud/src/pages/EditMovie.js
 */
class EditMovie extends Component {
  constructor() {
    super();

    this.state = {
      status: 'loading',
      redirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // Source: https://github.com/tryber/sd-010-a-project-movie-card-library-crud/blob/renzosev-project-movie-card-library-crud/src/pages/EditMovie.js
  handleSubmit(updatedMovie) {
    this.setState({ redirect: false }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({ redirect: true });
    });
  }

  // Source: https://github.com/tryber/sd-010-a-project-movie-card-library-crud/blob/renzosev-project-movie-card-library-crud/src/pages/EditMovie.js
  async fetchMovie() {
    const { match: { params: { id } } } = this.props;

    this.setState({ status: 'loading' }, async () => {
      const requestMovie = await movieAPI.getMovie(id);
      this.setState({ status: 'stop loading', movie: requestMovie });
    });
  }

  // Source: https://github.com/tryber/sd-010-a-project-movie-card-library-crud/blob/renzosev-project-movie-card-library-crud/src/pages/EditMovie.js
  render() {
    const { status, redirect, movie } = this.state;
    if (redirect) return <Redirect to="/" />;
    if (status === 'loading') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default EditMovie;
