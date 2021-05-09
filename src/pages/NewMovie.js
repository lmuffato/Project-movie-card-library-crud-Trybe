import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
    };
  }

  handleSubmit = async (newMovie) => {
    const { createMovie } = movieAPI;
    try {
      await createMovie(newMovie);
      this.setState({ isCreated: true });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { isCreated } = this.state;
    if (isCreated) {
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
