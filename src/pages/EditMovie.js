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
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  fetchMovies = async () => {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const data = await getMovie(id);
    this.setState({ movie: data, loading: false });
  };

  render() {
    const { shouldRedirect, movie, loading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default EditMovie;
