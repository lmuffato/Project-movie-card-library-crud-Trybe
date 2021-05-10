import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'running',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        await movieAPI.createMovie(newMovie);
        this.setState({
          status: 'running',
          shouldRedirect: true,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (status === 'loading') {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
