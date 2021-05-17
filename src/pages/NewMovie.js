import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading } from '../components';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.pageLoaded();
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  pageLoaded() {
    this.setState({
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect } = this.state;

    if (shouldRedirect) return (<Redirect to="/" />);
    if (status === 'loading') return (<Loading />);

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
