import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ComeToMeMovies = this.ComeToMeMovies.bind(this);

    this.state = {
      status: 'loading',
      movie: [],
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.ComeToMeMovies();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async ComeToMeMovies() {
    const { match } = this.props;
    const { id } = match.params;
    const allMovies = await movieAPI.getMovies();
    this.setState({
      movie: allMovies[id - 1],
      status: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
