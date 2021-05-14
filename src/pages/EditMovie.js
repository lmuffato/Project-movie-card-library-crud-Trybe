import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieUpdated();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    this.setState(async () => {
      const updateMovieResult = await updateMovie(updatedMovie);
      this.setState({
        movie: updateMovieResult,
        shouldRedirect: true,
      });
    });
  }

  async fetchMovieUpdated() {
    const { match: { params: { id } } } = this.props;
    this.setState(async () => {
      const getMovieReturn = await movieAPI.getMovie(id);
      this.setState({
        movie: getMovieReturn,
        loading: false,
      });
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    // if (status === 'loading') {
    //   // render Loading
    // }

    return (
      <div data-testid="edit-movie">
      { !loading
          ? <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          : <Loading /> }     
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
