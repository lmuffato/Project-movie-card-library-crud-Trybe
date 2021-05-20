import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState = {
      shouldRedirect: true,
    };
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    const form = (<MovieForm movie={ movie } onSubmit={ this.handleSubmit } />);

    return (
      <div data-testid="edit-movie">
        {loading ? <Loading /> : form}
      </div>
    );
  }
}

export default EditMovie;
