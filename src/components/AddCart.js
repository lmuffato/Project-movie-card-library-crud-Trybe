import React from 'react';
import { Link } from 'react-router-dom';

function AddCart() {
  return (
    <nav>
      <ul>
        <li><Link to="/movies/new">ADICIONAR CARTÃO</Link></li>
      </ul>
    </nav>
  );
}

export default AddCart;
