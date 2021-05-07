import React, { Component } from 'react';

import { Redirect } from 'react-router';
import { number, shape } from 'prop-types';

import { Loading, MovieForm } from '../components';

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
    const { match: { params: { id } } } = this.props;

    this.setState({ status: 'loading' }, async () => {
      const requestMovie = await movieAPI.getMovie(id);
      this.setState({ status: 'stop loading', movie: requestMovie });
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
  match: shape({
    params: shape({
      id: number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
