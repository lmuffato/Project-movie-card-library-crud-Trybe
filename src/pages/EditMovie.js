import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fetchMovieById = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
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
  match: PropTypes.shape().isRequired,
};

export default EditMovie;
