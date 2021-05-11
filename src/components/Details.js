import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    const { rating, id } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Details.propTypes = {
  rating: PropTypes.number,
  id: PropTypes.number.isRequired,
};

Details.defaultProps = {
  rating: 3,
};

export default Details;
