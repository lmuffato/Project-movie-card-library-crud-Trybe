import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: '',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieById = this.getMovieById.bind(this);
  }

  componentDidMount() {
    this.getMovieById();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    const res = await updateMovie(updatedMovie);
    if (res) this.setState({ shouldRedirect: true });
  }

  async getMovieById() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    this.setState({
      status: 'loading',
      shouldRedirect: false,
    });
    const res = await getMovie(id);
    this.setState({
      movie: res,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie" className="card">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.object,
}.isRequerid;

export default EditMovie;
