import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import '../details.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match } = this.props;
    const { params: { id } } = match;
    const getID = await movieAPI.getMovie(id);
    this.setState({ movies: getID, loaded: false });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { params: { id } } = match;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    const { loaded } = this.state;

    return (
      loaded ? <Loading /> : (
        <div data-testid="movie-details">

          <img src={ `../${imagePath}` } alt="Movie Cover" />
          <p>
            {' '}
            { `Title: ${title}` }
            {' '}
          </p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>

          <button className="button-edit" type="button">
            <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
          </button>

          <button className="button-back" type="button">
            <Link to="/"> VOLTAR </Link>
          </button>

          <button className="button-remove" type="button">
            <Link to="/" onClick={ this.deleteMovie }> DELETAR </Link>
          </button>

        </div>
      )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;

// Requisito 07: ajuda/dica do André Barroso
