import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class Delet extends Component {
    callDelet = (id) => {
      movieAPI.deleteMovie(id);
    }

    render() {
      const { id } = this.props;
      return (
        <div>
          {this.callDelet(id)}
          <Redirect to="/" />
        </div>
      );
    }
}

Delet.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Delet;
