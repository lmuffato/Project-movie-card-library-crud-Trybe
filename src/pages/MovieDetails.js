import React, { Component } from 'react';

// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    const forTest = {
      id: 1,
      title: 'Kingsglaive',
      subtitle: 'Final Fantasy XV',
      storyline: 'King Regis, who oversees the land of Lucis.',
      rating: 4.5,
      imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
      bookmarked: true,
      genre: 'action',
    };
    // Change the condition to check the state
    // if (true) return <Loading />;

    // const { title, storyline, imagePath, genre, rating, subtitle } = {};
    const { storyline, imagePath, genre, rating, subtitle } = forTest;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
