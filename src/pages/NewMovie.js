import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: false,
    };
  }

  async handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    const teste = await createMovie(newMovie);
    if (teste === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
