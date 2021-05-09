import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        genre: '',
        rating: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const movie = await getMovie(id);
    this.setState({
      movie,
      status: 'no-loading',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (status === 'loading') return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
