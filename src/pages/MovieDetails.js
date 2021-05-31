import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.fetcMovie();
  }

  fetcMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await movieAPI.getMovie(id);
    this.setState({
      movie: data,
    });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (movie.length === 0) return (<Loading />);

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title:${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default MovieDetails;
