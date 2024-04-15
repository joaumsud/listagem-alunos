import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Listagem de Alunos</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Ver Lista
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Adicionar Aluno
        </NavLink>
      </div>
    </header>
  );
};

export default Header;