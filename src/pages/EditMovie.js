import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieApi();
  }

  handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: false,
    }, async () => {
      const response = await movieAPI.updateMovie(updatedMovie);
      this.setState({
        movie: response,
        shouldRedirect: true,
      });
    });
  }

  fetchMovieApi = () => {
    this.setState({
      status: 'loading',
    }, async () => {
      const { match } = this.props;
      const response = await movieAPI.getMovie(match.params.id);
      this.setState({
        movie: response,
        status: '',
      });
    });
  };

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect />;
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
