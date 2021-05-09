import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading } from '../components';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({
      shouldRedirect: true,
      loading: true,
    }, async () => {
      await movieAPI.createMovie(newMovie);
      this.setState({
        shouldRedirect: false,
        loading: false,
      });
    });
  }

  render() {
    const { shouldRedirect, loading } = this.state;
    if (shouldRedirect) return <Redirect />;

    if (loading) return <Loading />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
