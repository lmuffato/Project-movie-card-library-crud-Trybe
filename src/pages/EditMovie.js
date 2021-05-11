import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Proptypes from 'prop-types';
import { MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fatchApiUpdate = this.fatchApiUpdate.bind(this);
  }

  componentDidMount() {
    this.fatchApiUpdate();
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fatchApiUpdate = () => {
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((data) => {
      const dataId = data;
      this.setState({
        movie: dataId,
        status: '',
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return 'Carregando...';
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: Proptypes.objectOf(Proptypes.object).isRequired,
};

export default EditMovie;
