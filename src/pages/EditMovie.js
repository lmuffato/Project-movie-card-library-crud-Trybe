import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
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
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fetchMovie = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({ status: 'loading' }, async () => {
      const requestMovie = await movieAPI.getMovie(id);
      this.setState({
        movie: requestMovie,
        status: false,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect//
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

// Referência para o redirect: https://qastack.com.br/programming/34735580/how-to-do-a-redirect-to-another-route-with-react-router#:~:text=23-,Como%20fazer%20um%20redirecionamento%20para%20outra%20rota%20com%20react%2Drouter,como%20a%20rota%20de%20login.

EditMovie.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default EditMovie;
