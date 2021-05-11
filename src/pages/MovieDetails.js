import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.fetchgetAPI(id);
  }

  async fetchgetAPI(id) {
    const receive = await movieAPI.getMovie(id);
    this.setState({
      movie: receive,
      status: '',
    });
  }

  render() {
    const { status, movie: { id, title, storyline, imagePath, genre, rating,
      subtitle } } = this.state;
    if (status === 'loading') {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title:${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
