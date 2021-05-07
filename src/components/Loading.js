import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { message } = this.props;

    return (
      <div>{message}</div>
    );
  }
}

export default Loading;

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
