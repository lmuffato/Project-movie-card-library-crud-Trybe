import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
      status: 'unloading',
      shouldRedirect: false,
    }));
  }

  async handleSubmit(updatedMovie) {
    // console.log(updatedMovie);
    await this.setState({
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    });
    movieAPI.updateMovie(updatedMovie).then(({ ...updatedMovieReturn }) => this.setState({
      movie: updatedMovieReturn,
      status: 'unloading',
      shouldRedirect: true,
    }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      // render Loading
      return (<Loading />);
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
