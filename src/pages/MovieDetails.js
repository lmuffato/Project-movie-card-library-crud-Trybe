import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentDidMount() {
    this.handleMovies();
  }

  handleMovies = async () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id).then((data) => {
        this.setState({ movie: data, loading: false });
      });
    });
  };

  handleDelete = (event, id) => {
    event.preventDefault();
    movieAPI.deleteMovie(id);
  }

  handleLoading(movie) {
    const { id, imagePath, subtitle, storyline, genre, rating, title } = movie;
    return (
      <div data-testid="movie-details">
        <div className="container-detail">
          <img alt="Movie Cover" src={ `../${imagePath}` } className="img-detail" />
          <p className="movie-detail-title">{ `Título: ${title}` }</p>
          <p className="movie-detail-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movie-detail-storyline">{ `Storyline: ${storyline}` }</p>
          <p className="movie-detail-genre">{ `Genre: ${genre}` }</p>
          <p className="movie-detail-rating">{ `Rating: ${rating}` }</p>
        </div>
        <div className="container">
          <Link to="/" className="btn-back">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } className="btn-edit">EDITAR</Link>
          <button
            type="submit"
            onClick={ (event) => this.handleDelete(event, id) }
            className="btn-delete"
          >
            <Link to="/">DELETAR</Link>
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;

    return loading ? <Loading /> : this.handleLoading(movie);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;

// Ideia de usar o destructuring para match.params --> https://github.com/tryber/sd-010-a-project-movie-card-library-crud/pull/65
