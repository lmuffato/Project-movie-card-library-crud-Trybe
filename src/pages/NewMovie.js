import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoulStatus: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const data = await movieAPI.createMovie(newMovie);
    console.log(newMovie);
    console.log(data);
    this.setState({ shoulStatus: 'OK' });
  }

  render() {
    const { shoulStatus } = this.state;
    if (shoulStatus === 'OK') {
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
