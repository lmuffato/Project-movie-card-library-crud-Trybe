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
      movie: [],
      loading: 'loading',
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

  async fetchMovie() {
    const { match } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const requestMovie = await movieAPI.getMovie(match.params.id);
        this.setState({
          loading: false,
          movie: requestMovie,
        });
      },
    );
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    return (
      <div data-testid="edit-movie">
        {loading ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
        {shouldRedirect && <Redirect to="/" /> }
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
