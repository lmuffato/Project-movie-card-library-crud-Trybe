import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      () => {
        movieAPI.getMovie(id)
          .then((valor) => {
            this.setState({
              movie: valor,
              loading: false,
            });
          });
      },
    );
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (loading === true) {
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
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EditMovie;
