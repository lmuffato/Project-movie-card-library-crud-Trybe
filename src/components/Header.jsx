import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">LISTA DE FILMES</Link>
          </li>
          <li>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
