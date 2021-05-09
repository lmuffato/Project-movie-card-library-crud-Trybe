import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'not',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createMovieCall = this.createMovieCall.bind(this);
  }

  async handleSubmit(newMovie) {
    await this.createMovieCall(newMovie);
    this.setState(() => ({ status: 'ok' }));
  }

  async createMovieCall(movie) {
    await movieAPI.createMovie(movie);
  }

  render() {
    const { status } = this.state;

    if (status === 'ok') {
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
