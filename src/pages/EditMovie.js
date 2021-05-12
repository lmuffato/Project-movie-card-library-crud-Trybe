// feito com auxilio e dicas:
// Rafael Medeiros - Turma 10 - Tribo A
import React, { Component } from 'react';
import { number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
      id,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          movie: data,
          loading: false,
        });
      });
  }

  handleSubmit = (updatedMovie) => {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  id: number,
}.isRequared;

export default EditMovie;
