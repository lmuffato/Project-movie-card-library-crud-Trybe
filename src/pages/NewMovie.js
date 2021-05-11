import React, { Component } from 'react';
import './style/NewMovie.css';
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
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({
      status: true,
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div data-testid="new-movie" className="new-movie">
        <h3>Novo filme</h3>
        { status && <Redirect to="/" /> }
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
