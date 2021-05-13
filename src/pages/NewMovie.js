import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading } from '../components';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shouldRedirect: false,
    };
  }

  handleSubmit = async (newMovie) => {
    this.setState({
      isLoading: true,
    });
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({
      isLoading: false,
      shouldRedirect: true,
    });
  }

  render() {
    const { isLoading, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      isLoading ? <Loading /> : (
        <div data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
      )
    );
  }
}
export default NewMovie;
