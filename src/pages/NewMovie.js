import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);

    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        <h1>New movie</h1>
      </div>
    );
  }
}
export default NewMovie;
