import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: false,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }
  
  requestMovie = async () => {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.setState({
      movie: movie,
    });
  }
    
  
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        { movie ?
          <div>
            <h2>{ title }</h2>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div> : <Loading />
        }
        <Link to="/" >VOLTAR</Link>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
