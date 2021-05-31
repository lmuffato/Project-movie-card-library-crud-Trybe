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

  async handleSubmit(newMovie) {
    console.log(newMovie);
    await movieAPI.createMovie(newMovie);
    await this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === true) {
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
