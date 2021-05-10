import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: 'action',
        rating: 0,
        subtitle: '',
      },
      isLoading: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    this.setState({ isLoading: true }, async () => {
      await createMovie(newMovie);
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
