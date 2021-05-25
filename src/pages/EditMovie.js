import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTheMovie = this.getTheMovie.bind(this);
  }

  componentDidMount() {
    this.getTheMovie();
  }

  getTheMovie = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  handleSubmit = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
      loading: false,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    const form = (<MovieForm movie={ movie } onSubmit={ this.handleSubmit } />);

    return (
      <div data-testid="edit-movie">
        {loading ? <Loading /> : form}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
