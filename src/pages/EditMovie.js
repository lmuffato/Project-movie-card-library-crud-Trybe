import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
    };
    this.request = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestMovieToEdit = this.requestMovieToEdit.bind(this);
  }

  componentDidMount() {
    this.request = true;
    this.requestMovieToEdit();
  }

  componentWillUnmount() {
    this.request = false;
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async requestMovieToEdit() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    if (this.request) {
      const movie = await getMovie(id);
      this.setState({
        movie,
        isLoading: false,
        shouldRedirect: false,
      });
    }
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
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
  match: PropTypes.object,
}.isRequired;

export default EditMovie;
