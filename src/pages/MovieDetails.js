import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      didNotMount: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.returnMyMovie();
  }

  returnMyMovie = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const myMovie = await getMovie(id);
    this.setState({ movie: myMovie });
    this.setState({ didNotMount: false });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, didNotMount } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    return (
      <div data-testid="movie-details">
        {
          didNotMount === true
            ? <Loading />
            : <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <h1>{ `Title: ${title}` }</h1>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <hr />
              <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
              <button type="button"><Link to="/">VOLTAR</Link></button>
            </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
