import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

export default function EditMovie(props) {
  const [status, setStatus] = useState('loading');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [movieState, setMovie] = useState({});

  function handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    setShouldRedirect(true);
  }

  const fetchMovie = useCallback(() => {
    const { match: { params: { id } } } = props;
    movieAPI.getMovie(id)
      .then((movieObject) => {
        setMovie(movieObject);
        setStatus('');
      });
  }, [props]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  if (shouldRedirect) {
    // Redirect
    return <Redirect to="/" />;
  }

  if (status === 'loading') {
    // render Loading
    return (<Loading />);
  }

  return (
    <div data-testid="edit-movie">
      <MovieForm movie={ movieState } onSubmit={ handleSubmit } />
    </div>
  );
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
