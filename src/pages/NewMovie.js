import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      done: false,
    };
  }

  handleSubmit = async (newMovie) => {
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({ done: true });
  }

  render() {
    const { done } = this.state;
    if (done) {
      return (
        <Redirect to="/" />
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
