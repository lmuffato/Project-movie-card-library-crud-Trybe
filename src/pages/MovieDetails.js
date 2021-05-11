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
      gotMovie: false,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, gotMovie: true }));
  }

  handleDelete() {
    const { movie: { id } } = this.state;
    console.log(id);
    movieAPI.deleteMovie(id).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { gotMovie } = this.state;
    const {
      movie: {
        title,
        storyline,
        imagePath,
        genre,
        rating,
        subtitle,
        id,
      },
      shouldRedirect,
    } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return !gotMovie ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
