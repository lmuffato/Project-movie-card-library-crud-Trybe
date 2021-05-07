import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      movie: {},
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          movie: data,
          loading: false,
        });
      });
  }

  handleDelete() {
    const { movie } = this.state;
    const { id } = movie;

    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({
          redirect: true,
        });
      });
  }

  // Source: https://github.com/tryber/sd-08-project-movie-cards-library-crud/tree/c152ee7259a1d37fcfc7714ec4b820f5f9513e72
  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const { loading, redirect } = this.state;

    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ this.handleDelete } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
