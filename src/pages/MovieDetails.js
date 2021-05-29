import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };
  }

  fetchAPI = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  };

  componentDidMount = () => {
    this.fetchAPI();
  };

  render() {
    const { match: { params: { id } } } = this.props;
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movie: { title, storyline, imagePath,
      genre, rating, subtitle } } = this.state;

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

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
