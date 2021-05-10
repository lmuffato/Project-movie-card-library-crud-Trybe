import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.getMovie = this.getMovie.bind(this);
    this.showMovie = this.showMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.getMovie(id);
  }

  async getMovie(id) {
    this.setState({ movie: await movieAPI.getMovie(id), loading: false });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  showMovie(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;
    return (
      <div className="movie-card movie-card-edit">
        <div data-testid="movie-details" className="movie-card-body">
          <p className="movie-card-title">{ title }</p>
          <img alt="Movie Cover" className="movie-card-image" src={ `../${imagePath}` } />
          <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p className="rating">{ `Rating: ${rating}` }</p>
        </div>
        <div className="edit-return">
          <Link className="link-btn" to="/">VOLTAR</Link>
          <Link className="link-btn" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link className="link-btn" to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <div>
        { loading ? <Loading /> : this.showMovie(movie) }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default MovieDetails;
