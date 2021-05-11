import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    console.log(newMovie);
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({
      status: true,
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div data-testid="new-movie">
        { status && <Redirect to="/" /> }
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
