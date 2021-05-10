import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; // requisito 6
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) { // nativo
    movieAPI.createMovie(newMovie).then(() => { // requisito 6
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { shouldRedirect } = this.state; // requisito 6
    if (shouldRedirect) return <Redirect to="/" />; // requisito 6
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
