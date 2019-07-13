import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerJogar } from './styles';

import Header from '../Header';

const lista = {
  mLista: ["Título 01x", "Título 02", "Título 03", "Título 04", "Título 05", "Título 06"]
};

export default function Jogar({ match }) {
  return (
    <>
      <Header />
      <ContainerJogar>
      <div>
        <h1>Jogando paramsX: {match.params.parametros}</h1>
        <ul>
          { lista.mLista.map(lista =>
            <li key={lista}>
              <Link to='/jogar'> {lista} </Link>
            </li>)
          }
        </ul>
      </div>
      </ContainerJogar>
    </>
  );
}
