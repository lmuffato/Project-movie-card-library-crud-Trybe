import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      id,
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieAPI = this.getMovieAPI.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getMovieAPI(id);
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false },
      async () => {
        movieAPI.updateMovie(updatedMovie);
        this.setState({ shouldRedirect: true });
      });
  }

  getMovieAPI(movieId) {
    this.setState(
      { loading: true },
      async () => {
        const responseAPI = await movieAPI.getMovie(movieId);
        this.setState({
          loading: false,
          movie: responseAPI,
        });
      },
    );
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
