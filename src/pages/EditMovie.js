import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.showMovieForEdit = this.showMovieForEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.showMovieForEdit();
  }

  // updatedMovie é parametro de handle submit
  handleSubmit() {
    console.log('qualquercoisa');
  }

  showMovieForEdit = async () => {
    const { match: { params: { id } } } = this.props;
    const specificMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: specificMovie,
      loading: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return loading ? <Loading /> : (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default EditMovie;
