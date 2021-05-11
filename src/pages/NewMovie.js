import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.handleFetch(newMovie);
  }

  handleFetch = (param) => {
    movieAPI.createMovie(param)
      .then(this.setState({
        shouldRedirect: true,
      }));
  }

  handleReturn = () => {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect />;
    }

    return <MovieForm onSubmit={ this.handleSubmit } />;
  }

  render() {
    return (
      <div data-testid="new-movie">
        { this.handleReturn() }
      </div>
    );
  }
}
export default NewMovie;
