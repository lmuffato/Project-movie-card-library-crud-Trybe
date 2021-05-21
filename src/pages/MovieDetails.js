import React, { Component } from 'react';
import PropType from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    const { match: { params: { id } } } = this.props;

    this.state = {
      loading: true,
      movie: {},
      id,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    const { id } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovie(id);
        this.setState({
          movie: response,
          loading: false,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    const { movie, loading, id } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to="/" onClick={ async () => movieAPI.deleteMovie(id) }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropType.number,
}.isRequired;

export default MovieDetails;
