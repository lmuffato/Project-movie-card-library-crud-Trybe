import React, { Component } from 'react';
import { shape, number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';
import { union } from '../fp-library/union';

const Type = union('loading', 'loaded', 'redirect');

class EditMovie extends Component {
  constructor() {
    super();

    this.state = {
      status: Type.loading,
      movie: {},
    };
  }

  componentDidMount = () => this.fetchData()

  fetchData = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: Type.loading }, () => {
      getMovie(id).then((movie) => {
        this.setState({ movie, status: Type.loaded });
      });
    });
  }

  handleSubmit = (updatedMovie) => this.setState({ status: Type.loading }, () => {
    updateMovie(updatedMovie).then(() => {
      this.setState({ status: Type.redirect });
    });
  })

  createMovieForm = (movie) => (
    <div data-testid="edit-movie">
      <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
    </div>
  )

  render = () => {
    const { movie, status } = this.state;
    return status.match({
      redirect: <Redirect to="/" />,
      loading: <Loading />,
      loaded: this.createMovieForm(movie),
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
