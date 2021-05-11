import React, { Component } from 'react';
import './style/MovieDetails.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      load: true,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ load: true }, async () => {
      const Movie = await movieAPI.getMovie(id);
      this.setState({
        movie: Movie,
        load: false,
      });
    });
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    const { deleteMovie } = movieAPI;
    await deleteMovie(id);
  }

  render() {
    const { movie, load } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        { load ? <Loading /> : (
          <div data-testid="movie-details" className="movie-details">
            <button type="button" onClick={ this.deleteMovie }>
              <Link to="/">DELETAR</Link>
            </button>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <div className="links">
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>

          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetails;
