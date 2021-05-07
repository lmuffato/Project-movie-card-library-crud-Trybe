import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <img src={imagePath} alt={ `Imagem do filme ${title}` } />
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
// id: 1,
// title: 'Kingsglaive',
// subtitle: 'Final Fantasy XV',
// storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
// rating: 4.5,
// imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
// bookmarked: true,
// genre: 'action',