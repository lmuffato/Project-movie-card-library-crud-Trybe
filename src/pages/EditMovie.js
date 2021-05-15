import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  requestMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const theMovie = await getMovie(id);
    this.setState({
      movie: theMovie,
      status: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    return (
      <div data-testid="edit-movie">
        { status ? <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          : <Loading /> }
        { shouldRedirect ? <Redirect to="/" /> : console.log('Cant redirect')}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
