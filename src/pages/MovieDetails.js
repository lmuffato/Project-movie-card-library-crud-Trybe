import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovieData = this.fetchMovieData.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      movie: {},
      loading: true,
      id,
    };
  }

  componentDidMount() {
    this.fetchMovieData();
  }

  async fetchMovieData() {
    this.setState({ loading: true }, async () => {
      const { id } = this.state;
      const response = await movieAPI.getMovie(id);
      this.setState({ movie: response, loading: false });
    });
  }

  render() {
    const { movie, loading, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}`}</h3>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
