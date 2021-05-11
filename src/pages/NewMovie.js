import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MovieForm } from '../components';
import { createMovie } from '../services/movieAPI';
import { union } from '../fp-library/union';

const Type = union('redirect', 'render');

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      status: Type.render,
    };
  }

  handleSubmit = (newMovie) => this.setState({ status: Type.render }, () => {
    createMovie(newMovie).then(() => {
      this.setState({ status: Type.redirect });
    });
  })

  createMovieForm = () => (
    <div data-testid="new-movie">
      <MovieForm onSubmit={ this.handleSubmit } />
    </div>
  )

  render = () => {
    const { status } = this.state;
    return status.match({
      redirect: <Redirect to="/" />,
      render: this.createMovieForm(),
    });
  }
}
export default NewMovie;
