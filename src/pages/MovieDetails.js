import React, { Component } from 'react';
import { number } from 'prop-types'; // essa descontrução foi passada pelo willian
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
      id: 0,
    };
  }

  componentDidMount() {
    this.renderizaFilme();
  }

  renderizaFilme() {
    const { match: { params: { id } } } = this.props; // função finalizada com ajuda do gulherme lira
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState(() => ({ movie: { ...data }, loading: false, id }));
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie: { title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle }, loading, id } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: number,
}.isRequired;

export default MovieDetails;
