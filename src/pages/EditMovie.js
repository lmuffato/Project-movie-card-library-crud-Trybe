import React, { Component } from 'react';
import './style/EditMovie.css';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: [],
      status: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    this.setState(async () => {
      const updateResult = await updateMovie(updatedMovie);
      this.setState({
        movie: updateResult,
        shouldRedirect: true,
      });
    });
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: true }, async () => {
      const Movie = await movieAPI.getMovie(id);
      this.setState({
        movie: Movie,
        status: false,
      });
    });
  }

  render() {
    const { status, movie, shouldRedirect } = this.state;
    return (
      <div className="edit-movie">
        {shouldRedirect && <Redirect to="/" />}
        {status ? <Loading /> : (
          <div data-testid="edit-movie">
            <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
          </div>
        )}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes).isRequired,
};

export default EditMovie;
