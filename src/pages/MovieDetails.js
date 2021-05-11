import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      // id: 0,
      movie: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    // new Promise((resolve) => {
    //   resolve(
    //     this.setState((_state, { match: { params: { id } } }) => ({
    //       id,
    //     })),
    //   );
    // })
    //   .then(() => {
    //     const { id } = this.state;
    //     movieAPI.getMovie(id)
    //       .then((movie) => {
    //         this.setState({
    //           movie,
    //           isLoading: false,
    //         });
    //       });
    //   });
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({
          movie,
          isLoading: false,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    return (
      isLoading ? <Loading /> : (
        <div data-testid="movie-details" className="movieDetails">
          <div className="movieDetails__img__wrap">
            <img
              alt="Movie Cover"
              src={ `../${imagePath}` }
              className="movieDetails__img"
            />
            <h1 className="movieDetails__title">{ title }</h1>
          </div>
          <p className="movieDetails__subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movieDetails__storyline">{ `Storyline: ${storyline}` }</p>
          <p className="movieDetails__genre">{ `Genre: ${genre}` }</p>
          <p className="movieDetails__rating">{ `Rating: ${rating}` }</p>
          <div className="movieDetails__links">
            <Link
              className="movieDetails__eddit"
              to={ `/movies/${id}/edit` }
            >
              EDITAR
            </Link>
            <Link
              className="movieDetails__delete"
              to="/"
              onClick={ () => movieAPI.deleteMovie(id) }
            >
              DELETAR
            </Link>
            <Link className="movieDetails__back" to="/">VOLTAR</Link>
          </div>
        </div>
      )
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};
