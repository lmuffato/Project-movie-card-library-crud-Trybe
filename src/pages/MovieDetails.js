import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      loading: true,
      movie: {},
      id,
    };
  }

  componentDidMount() {
    this.movieRequest();
  }

  async movieRequest() {
    const { id } = this.state;
    const request = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie: request,
    });
  }

  render() {
    const { loading, movie } = this.state;

    if (loading) return (<Loading />);

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ async () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
