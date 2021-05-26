import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = async () => {
    const { match: { params: { id } } } = this.props;
    let { movie } = this.state;
    movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  deleteMovie = (id) => {
    movieAPI.deleteMovie(id);
  }

  fetchData = () => {
    const { movie } = this.state;
    if (movie !== ('' || undefined)) {
      const { title, imagePath, subtitle, storyline, genre, rating, id } = movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <button type="button">
            <Link to={ `${id}/edit` }>
              EDITAR
            </Link>
          </button>
          <button type="button" onClick={ this.deleteMovie(id) }>
            <Link to="/">DELETAR</Link>
          </button>
          <br />
          <Link to="/"> VOLTAR </Link>
        </div>
      );
    }
  }

  render() {
    const { movie } = this.state;
    return (movie !== '' ? this.fetchData() : <Loading />);
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
