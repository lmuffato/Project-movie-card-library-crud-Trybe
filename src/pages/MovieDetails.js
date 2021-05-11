import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { deleteMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: 'loading',
    };
  }

  componentDidMount() {
    this.fatchApiId();
  }

  fatchApiId = () => {
    const { match: { params: { id } } } = this.props;

    getMovie(id).then((data) => {
      const returnObject = data;
      this.setState({
        movie: returnObject,
        loading: '',
      });
    });
  }

  delMovie = () => {
    const { match: { params: { id } } } = this.props;
    deleteMovie(id);
  }

  render() {
    const { loading } = this.state;
    const loadingDetails = () => {
      if (loading === 'loading') {
        return <Loading />;
      }
    };

    const { movie: { storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { movie: { title, id } } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        {loadingDetails()}
        <button type="submit">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="submit">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="submit">
          <Link to="/" onClick={ () => this.delMovie() }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({ params: {
    id: Proptypes.number,
  } }).isRequired,
};

export default MovieDetails;
