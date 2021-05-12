import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
  }

  handleSubmit = async (updateMovie) => {
    const data = await movieAPI.updateMovie(updateMovie);
    this.setState({
      shouldRedirect: true,
    });
    return data;
  }

  fetchAPI = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      isLoading: false,
      movie,
    });
  }

  componentDidMount = () => {
    this.fetchAPI();
  }

  render() {
    const { isLoading, movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      isLoading ? <Loading /> : (
        <div data-testid="edit-movie">
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      )
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
