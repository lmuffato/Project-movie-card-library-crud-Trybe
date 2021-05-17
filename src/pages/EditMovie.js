import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieApi = this.getMovieApi.bind(this);
  }

  componentDidMount() {
    this.getMovieApi();
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  getMovieApi() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    this.setState(
      { status: 'loading' },
      async () => {
        const crrMovie = await getMovie(id);
        this.setState({
          movie: crrMovie,
          status: '',
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
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
