import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="form">
          Título
          <input type="text" />
        </label>
        <label htmlFor="form">
          Subtítulo
          <input type="text" />
        </label>
        <label htmlFor="form">
          Imagem
          <input type="text" />
        </label>
        <label htmlFor="form">
          Sinopse
          <input type="textarea" />
        </label>
        <label htmlFor="form">
          Gênero
          <select>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
