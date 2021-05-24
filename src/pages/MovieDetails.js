import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eachmovie: '',
      loading: true,
    };
    this.requestMovie = this.requestMovie.bind(this);
  }

  componentDidMount() {
    return this.requestMovie();
  }

  requestMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const theMovie = await getMovie(id);
    this.setState({
      eachmovie: theMovie,
      loading: false,
    });
  }

  // visto no código do Murilo a falta do "() => "
  // quem impedia o botão delete de funcionar
  // https://github.com/tryber/sd-010-a-project-movie-card-library-crud/pull/85/files
  render() {
    const { loading, eachmovie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = eachmovie;
    // const { match: { params: { id } } } = this.props;
    const movieDetail = (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link
          to="/"
          onClick={ () => movieAPI.deleteMovie(`${id}`) }
        >
          DELETAR
        </Link>
        <Link
          to={ `/movies/${id}/edit` }
        >
          EDITAR
        </Link>
        <Link
          to="/"
        >
          VOLTAR
        </Link>
      </>
    );
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : movieDetail }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
