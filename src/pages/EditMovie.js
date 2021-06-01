import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: '',
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    const { history } = this.props;
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    history.push('/');
  }

  fetchMovie = () => {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { load: true },
      async () => {
        const movieId = await movieAPI.getMovie(id);
        this.setState({
          load: false,
          movie: movieId,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie, load } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        { load ? <Loading />
          : (<MovieForm movie={ movie } onSubmit={ this.handleSubmit } />)}
      </div>
    );
  }
}

EditMovie.propTypes = {
  history: PropTypes.shape(),
}.isRequired;

export default EditMovie;
