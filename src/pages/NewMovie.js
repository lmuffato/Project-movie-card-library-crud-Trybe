// import { createEvent } from '@testing-library/dom';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };
  }

  handleSubmit = async (newMovie) => {
    this.setState({ shouldRedirect: false },
      async () => {
        await createMovie(newMovie);
        this.setState({
          shouldRedirect: true,
        });
      });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
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
