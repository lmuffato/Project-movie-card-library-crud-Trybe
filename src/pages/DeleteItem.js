import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

export default function DeleteItem(props) {
  const { param } = props;

  return (
    <Link to="/" onClick={ () => movieAPI.deleteMovie(param) }>DELETAR</Link>
  );
}

DeleteItem.propTypes = {
  param: PropTypes.shape(),
}.isRequired;
