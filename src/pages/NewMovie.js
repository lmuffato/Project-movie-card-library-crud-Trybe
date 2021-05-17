import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isDone: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (newMovie) => {
    console.log(newMovie);
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({ isDone: true });
  }

  render() {
    const { isDone } = this.state;
    if (isDone) {
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
