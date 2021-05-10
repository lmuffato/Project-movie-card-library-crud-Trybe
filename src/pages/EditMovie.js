import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSubmit = (updatedMovie) => {
    this.setState({ shouldRedirect: false }, () => {
      movieAPI.updateMovie(updatedMovie).then(() => {
        this.setState({ shouldRedirect: true });
      });
    });
  }

  fetchData() {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: 'loading' }, () => {
      movieAPI.getMovie(id).then((data) => {
        this.setState({ movie: data, status: 'loaded' });
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
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
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default EditMovie;
