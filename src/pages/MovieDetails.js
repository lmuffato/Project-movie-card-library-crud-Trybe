import React, { Component } from 'react';
import { shape, number } from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import { getMovie } from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount = () => this.fetchData()

  fetchData = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, () => {
      getMovie(id).then((data) => {
        this.setState({ movie: data, loading: false });
      });
    });
  }

  renderMovie = ({ imagePath, id, title, subtitle, storyline, genre, rating }) => (
    <section data-testid="movie-details">
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <h2>{ `Title: ${title}` }</h2>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      <Link to="/">VOLTAR</Link>
    </section>
  )

  render = () => {
    const { movie, loading } = this.state;
    return loading ? <Loading /> : this.renderMovie(movie);
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }),
}.isRequired;

export default MovieDetails;
