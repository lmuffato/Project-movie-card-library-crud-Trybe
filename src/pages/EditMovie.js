import React, { Component } from 'react';
import { MovieForm } from '../components';
// import { Redirect} from 'react-router'
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      // shouldRedirect: false,
      // status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fatchApiUpdate = this.fatchApiUpdate.bind(this);
  }


  componentDidMount() {
    this.fatchApiUpdate();
  }

  fatchApiUpdate = () => {
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((data) => {
      const dataId = data
      this.setState({
        movie: dataId,
      })
    })
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);  
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    console.log(movie);
    // if (shouldRedirect) {
    //   //
    // }

    // if (status === 'loading') {
    //   // render Loading
    // }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
