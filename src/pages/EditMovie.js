import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    const { movie } = movieAPI;
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  getMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { isLoading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);

        this.setState({
          isLoading: false,
          movie,
        });
      },
    );
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({ id: PropTypes.string }).isRequired,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default EditMovie;
