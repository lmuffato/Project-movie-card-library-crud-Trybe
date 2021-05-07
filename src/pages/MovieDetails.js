import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { params } = match;

    this.state = {
      id: params.id,
      movie: {},
      loading: false,
    };

    this.loadMovie = this.loadMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie() {
    this.setState({ loading: true }, async () => {
      const { id } = this.state;
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  deleteMovie() {
    const { movie } = this.state;
    movieAPI.deleteMovie(movie.id).then();
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) {
      return <Loading message="Carregando..." />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/" className="btn btn-primary">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } className="btn btn-link">EDITAR</Link>
        <Link to="/" className="btn btn-danger" onClick={ this.deleteMovie }>
          DELETAR
        </Link>
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
