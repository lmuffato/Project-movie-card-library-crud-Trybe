import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.fillMovie();
  }

  async fillMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      movie: await movieAPI.getMovie(id),
    });
  }

  render() {
    const { movie } = this.state;
    const { imagePath, title, subtitle, storyline, genre, rating, id } = movie;

    return (
      <div data-testid="movie-details">
        {title === undefined ? <Loading /> : (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;
