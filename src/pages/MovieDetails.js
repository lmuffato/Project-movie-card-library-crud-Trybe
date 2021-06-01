import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };

    this.awaitMovie = this.awaitMovie.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.awaitMovie();
  }

  async awaitMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  async delete() {
    const { match: { params: { id } } } = this.props;
    const toBeDeleted = await movieAPI.deleteMovie(id);
    return toBeDeleted;
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.delete() }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  params: Proptypes.object,
  match: Proptypes.object,
}.isRequired;

export default MovieDetails;
