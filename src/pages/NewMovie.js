import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createNewMovie: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    createMovie(newMovie);
    this.setState({ createNewMovie: true });
  }

  render() {
    const { createNewMovie } = this.state;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        {createNewMovie ? <Redirect to="/" /> : ''}
      </div>
    );
  }
}
export default NewMovie;
