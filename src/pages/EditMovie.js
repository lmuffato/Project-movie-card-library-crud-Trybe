import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'running',
      shouldRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { status: 'loading' },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState({
          status: 'running',
          shouldRedirect: true
        })
      });
  }

  fetchAPI = () => {
    const { id } = this.props.match.params;
    this.setState(
      { status: 'loading' },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          status: 'running',
          movie
        })
      })
  }

  componentDidMount = () => {
    this.fetchAPI();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/"/>
    }

    if (status === 'loading') {
      return(
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
