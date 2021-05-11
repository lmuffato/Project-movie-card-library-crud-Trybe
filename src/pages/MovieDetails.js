import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      id,
      movie: {},
      loading: false,
    };
  }

  fetchMovie = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const { id } = this.state;
      const request = await movieAPI.getMovie(id);
      console.log(request);
      this.setState({
        loading: false,
        movie: request,
      });
    });
  }

  deleteMovie = async () => {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  componentDidMount = async () => {
    this.fetchMovie();
  }

  render() {
    // const { movies } = this.state;
    const { loading, movie } = this.state;
    const { title, subtitle, storyline, imagePath, genre, rating } = movie;

    if (loading) {
      return <Loading loading="Carregando..." />;
    }
    const { id } = this.state;
    return (
      <div className="movie-details" data-testid="movie-details">
        <img className="img-movie" src={ `/${imagePath}` } alt="Movie Cover" />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <h4>{genre}</h4>
        <h1>{rating}</h1>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        { /* essa parte do código acima consultei o PR do Renzo Sevilha pois eu estava trocando a função onClick por onChange */ }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
