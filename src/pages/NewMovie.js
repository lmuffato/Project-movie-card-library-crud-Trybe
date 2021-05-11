import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MovieForm } from '../components';
import { createMovie } from '../services/movieAPI';
import { union } from '../fp-library/union';

const Type = union('redirect', 'render');

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: Type.render,
    };
  }

  handleSubmit = (newMovie) => {
    this.setState({ status: Type.render }, () => {
      createMovie(newMovie).then(() => {
        this.setState({ status: Type.redirect });
      });
    });
  }

  render = () => {
    const { status } = this.state;
    const wrappedMovieForm = (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
    return status.match({
      redirect: <Redirect to="/" />,
      render: wrappedMovieForm,
    });
  }
}
export default NewMovie;
