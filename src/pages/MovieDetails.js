import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super (props);

    this.getMovie = this.getMovie.bind(this);
    this.showMovie = this.showMovie.bind(this);

    this.state = {
      movie: undefined,
    };
  }

  async getMovie(id) {
    this.setState({ movie: await movieAPI.getMovie(id) });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMovie(id);
  }

  showMovie(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;
    return (
      <div data-testid="movie-details">
        { title }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="edit-return">
          <Link className="link-btn" to="/">VOLTAR</Link>
          <Link className="link-btn" to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
      </div>
    )
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie } = this.state;
    return (
      <div>
        { movie ? this.showMovie(movie) : <Loading /> }
      </div>
    )
  }
}

export default MovieDetails;
