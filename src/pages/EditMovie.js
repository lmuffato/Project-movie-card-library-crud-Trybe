import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ redirect: true });
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const response = await movieAPI.getMovie(params.id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    const { loading, redirect, movie } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    const loadingElement = <Loading />;

    if (loading) {
      return loadingElement;
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
