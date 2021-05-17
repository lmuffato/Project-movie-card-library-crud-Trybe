import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doYouHandleSubmit: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    createMovie(newMovie);
    this.setState({ doYouHandleSubmit: true });
  }

  render() {
    const { doYouHandleSubmit } = this.state;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        {doYouHandleSubmit ? <Redirect to="/" /> : null}
      </div>
    );
  }
}
export default NewMovie;
