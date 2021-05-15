import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  requestMovie = async () => {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.setState({
      movie: movie,
      status: true,
    });
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie)
    this.setState({
      shouldRedirect: true,
    })
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    return (
      <div data-testid="edit-movie">
        { status ? <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> :
          <Loading />
        }
        { shouldRedirect ? <Redirect to="/" /> : ''}
      </div>
    );
  }
}

export default EditMovie;
