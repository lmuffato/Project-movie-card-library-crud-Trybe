import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
  }

  fetchMovie = () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      async () => {
        const movieFromAPI = await movieAPI.getMovie(id);
        this.setState({
          movie: movieFromAPI,
          loading: false,
        });
      },
    );
  }

  componentDidMount = () => {
    this.fetchMovie();
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    return (
      <div data-testid="edit-movie">
        {loading ? <Loading /> : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

export default EditMovie;
