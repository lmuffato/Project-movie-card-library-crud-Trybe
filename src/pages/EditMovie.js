import React, { Component } from 'react';
import { shape, number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';
import { union } from '../fp-library/union';

const Type = union('loading', 'loaded', 'redirect');

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: Type.loading,
      movie: {},
    };
  }

  componentDidMount = () => this.fetchData()

  handleSubmit = (updatedMovie) => {
    this.setState({ status: Type.loading }, () => {
      updateMovie(updatedMovie).then(() => {
        this.setState({ status: Type.redirect });
      });
    });
  }

  fetchData = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: Type.loading }, () => {
      getMovie(id).then((movie) => {
        this.setState({ movie, status: Type.loaded });
      });
    });
  }

  render = () => {
    const { movie, status } = this.state;
    const wrappedMovieForm = (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
    return status.match({
      redirect: <Redirect to="/" />,
      loading: <Loading />,
      loaded: wrappedMovieForm,
    });
  }
}

EditMovie.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }),
}.isRequired;

export default EditMovie;
