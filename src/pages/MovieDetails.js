import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
      id: this.props.match.params.id,
    }
  }

  async componentDidMount() {
    const { id } = this.state
    const request = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie: request,
    });
  }

  render() {
    const { loading, movie } = this.state;

    if (loading) return (<Loading />);

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
      </div>
      <Link to="/">VOLTAR</Link>
      <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </>
    );
  }
}

export default MovieDetails;
