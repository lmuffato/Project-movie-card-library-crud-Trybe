import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { loadingTxt } = this.props;
    return (
      <div>{ loadingTxt }</div>
    );
  }
}

Loading.propTypes = {
  loadingTxt: PropTypes.string,
}.isRequired;
export default Loading;
