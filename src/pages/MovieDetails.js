import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      loading: true,
      movie: { id: '',
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: '',
        subtitle: '',
      },
    };
  }

  componentDidMount() {
    this.fetchMovieByID();
  }

  fetchMovieByID = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  handleDelete = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const obj = {
      pathname: `/movies/${id}/edit`,
    };

    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ obj }>EDITAR</Link>
        <Link to={ {} } onClick={ this.handleDelete }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default MovieDetails;
