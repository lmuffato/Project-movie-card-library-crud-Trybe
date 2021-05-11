import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      status: '',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(newMovie) {
    //req. API????
    const { createMovie } = movieAPI;
    const res = await createMovie(newMovie);
    if (res) this.setState({
      status: 'loading',
      movie: res,
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testeid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    )
  }


}
export default NewMovie;
