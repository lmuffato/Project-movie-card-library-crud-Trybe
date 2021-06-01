import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
    };
  }

  async handleSubmit(newMovie) {
    await createMovie(newMovie).then(() => {
      this.setState({ redirect: true });
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      // Redirect
      return (<Redirect to="/" />);
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
