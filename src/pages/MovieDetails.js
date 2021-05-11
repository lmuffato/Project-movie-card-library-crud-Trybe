import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);

        this.setState({
          loading: false,
          movie,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { title, id, storyline, imagePath, genre, rating, subtitle } = movie;
    const details = (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        </div>
      </>
    );

    return (
      <div data-testid="movie-details">
        {loading ? <Loading />
          : details}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({ id: PropTypes.string }).isRequired,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
