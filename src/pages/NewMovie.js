import React, { Component } from 'react';
import { Redirect } from 'react-router';

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

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    return (
      <div data-testid="new-movie">
        {shouldRedirect
          ? <Redirect to="/" />
          : <MovieForm onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}
export default NewMovie;
