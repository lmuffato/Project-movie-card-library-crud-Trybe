import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movies: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    const updated = await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true, movies: updated });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params: { id } } = match;
    const getID = await movieAPI.getMovie(id);
    this.setState({ movies: getID, status: false });
  }

  render() {
    const { status, shouldRedirect, movies } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        { status ? <Loading /> : <MovieForm movie={ movies } onSubmit={ this.handleSubmit } /> }
      </div>
    );
  }
}

export default EditMovie;
