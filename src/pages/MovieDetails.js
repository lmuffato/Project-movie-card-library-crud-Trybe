import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.showMovieDetails = this.showMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.showMovieDetails();
  }

  async handleSubmit() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  showMovieDetails = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ movie: {}, loading: true }, async () => {
      const specificMovie = await movieAPI.getMovie(id);
      this.setState({
        movie: specificMovie,
        loading: false,
      });
    });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return loading ? <Loading /> : (
      <section className="sectionDetails">
        <div className="detailsDetails" data-testid="movie-details">
          <img className="detailsImage" alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div className="detailsLinks">
            <Link className="link" to={ `/movies/${id}/edit` }>Editar</Link>
            <Link className="link" to="/">Voltar</Link>
            <Link className="link" to="/" onClick={ this.handleSubmit }>Deletar</Link>
          </div>
        </div>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default MovieDetails;

// Aprimoramento da rota realizada com a colaboração da Ana Ventura;
