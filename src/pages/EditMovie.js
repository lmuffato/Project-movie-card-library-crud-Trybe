/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({ shouldRedirect: true });
    });
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({ status: 'loading' }, async () => {
      const movieEdited = await movieAPI.getMovie(id);
      this.setState({ status: 'Carregou', movie: movieEdited });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect path="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

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
  }).isRequired,
};

export default EditMovie;
