import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: '',
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    const selMovie = await movieAPI.updateMovie(updatedMovie.id);
    console.log(updatedMovie);
    console.log(selMovie);
    this.setState({
      status: selMovie,
      movie: updatedMovie,
      shouldRedirect: false,
    });
    console.log(this.state);
  }

  render() {
    const { match: { params: movieId } } = this.props;
    this.handleSubmit(movieId);
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
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
