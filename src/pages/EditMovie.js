import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'running',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState({
          status: 'running',
          shouldRedirect: true,
        });
      },
    );
  }

  fetchAPI = () => {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { status: 'loading' },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          status: 'running',
          movie,
        });
      },
    );
  }

  componentDidMount = () => {
    this.fetchAPI();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
