import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movies from '../services/movieData';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      imagePath: '',
      title: '',
      subtitle: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await movieAPI.getMovie(id);
    const { title, storyline, imagePath, genre, rating, subtitle } = response;
    this.newMethod().setState({
      loading: false,
      imagePath,
      title,
      genre,
      rating,
      subtitle,
      storyline,
    });
  }

  newMethod() {
    return this;
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { loading, title, storyline, imagePath, genre, rating, subtitle } = this.state;
    if(loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{title}</h1>
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
