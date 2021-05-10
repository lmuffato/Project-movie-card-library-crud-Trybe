import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
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
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    movieAPI.getMovie(id).then(
      (movie) => {
        const { title, storyline, imagePath, genre, rating, subtitle } = movie;
        this.setState({
          loading: false,
          imagePath,
          title,
          genre,
          rating,
          subtitle,
          storyline,
        });
      },
    )
      .catch((error) => console.log(error));
  }

  async deleteMovie() {
    const { match: { params } } = this.props;
    const { id } = params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    const { match: { params } } = this.props;
    const { id } = params;
    return (
      <div data-testid="movie-details">
        <img src={ `../${imagePath}` } alt="Movie Cover" />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
