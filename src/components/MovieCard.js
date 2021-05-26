import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h1>{this.props}</h1>
      </div>
    );
  }
}

export default MovieCard;
