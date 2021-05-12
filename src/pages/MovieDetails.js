// feito com auxilio e dicas:
// Luan Ramalho - Turma 10 - Tribo A
// Rafael Medeiros - Turma 10 - Tribo A
// Guilherme Dornelles - Turma 10 - Tribo A
// Lucas Muniz Lara - Turma 10 - Tribo A
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      loading: true,
      movie: {},
      id,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          movie: data,
          loading: false,
        });
      });
  }

  deleteMovie = () => {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { movie, loading, id } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button">
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: number,
}.isRequired;

export default MovieDetails;
