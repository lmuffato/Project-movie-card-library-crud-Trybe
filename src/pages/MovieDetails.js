import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

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
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <img className="img-movie" src={ imagePath } alt="Movie Cover" />
        <h4>{genre}</h4>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <h1>{rating}</h1>

      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
