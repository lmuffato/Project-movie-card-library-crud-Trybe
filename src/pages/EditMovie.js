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
      shouldRedirect: false,
      movie: {},
    };
    this.fetchEditMovies = this.fetchEditMovies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchEditMovies();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchEditMovies() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      status: 'loading',
    });
    const responseMovies = await movieAPI.getMovie(id);
    this.setState({
      movie: responseMovies,
      status: 'loaded',
    });
  }

  render() {
    const { status, movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    let isLoad;
    if (status === 'loading') {
      // render Loading
      isLoad = <Loading />;
    } else {
      isLoad = <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
    }

    return (
      <div data-testid="edit-movie">
        {isLoad}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
