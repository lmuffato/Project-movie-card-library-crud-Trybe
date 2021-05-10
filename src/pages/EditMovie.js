import React, { Component } from 'react';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      shouldRedirect: false,
      status: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true })
  }

  async getMovie(id) {
    this.setState({ movie: await movieAPI.getMovie(id), status: true });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMovie(id);
  }

  render() {
    const { shouldRedirect, movie, status } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    return (
      <div data-testid="edit-movie">
       { status ? <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> : <Loading /> }
      </div>
    );
  }
}

export default EditMovie;
