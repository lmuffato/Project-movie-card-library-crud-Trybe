import React, { Component } from 'react';
import { Shape, Number } from 'prop-types';

import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.detailsApi();
  }

  detailsApi = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  };

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match: { params: { id } } } = this.props;
    const { movie: { title, storyline, imagePath, genre,
      rating, subtitle } } = this.state;
    const { loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Shape,
  params: Shape,
  id: Number,
}.isRequired;

export default MovieDetails;
