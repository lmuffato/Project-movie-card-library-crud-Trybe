import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  fetchGetMovie = async () => {
    this.setState({
      status: 'loading',
    });
    const { match: { params: { id } } } = this.props;
    const moviesList = await movieAPI.getMovie(id);
    this.setState({
      status: 'OK',
      movie: moviesList,
    });
  }

  handleSubmit = async (updatedMovie) => {
    const movieUpdated = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: movieUpdated,
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) { return <Redirect to="/" />; }
    if (status === 'loading') { return <Loading />; }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
