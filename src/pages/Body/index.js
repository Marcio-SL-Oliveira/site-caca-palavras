// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerBody } from './styles';
import listaBody from '../../services/listaBody';

export default function Body() {
  // const [lista, setLista] = useState(JSON.parse(listaBody));
  const lista = JSON.parse(listaBody);
  return(
    <ContainerBody>
      <div>
        <h1>Escolha um Caça-Palavras</h1>
        <ul>
          { lista.map(lista =>
            <li key={String(lista[0])}>
              <Link to={`/jogar/${lista[0]}`}> {lista[1]} </Link>
            </li>)
           }
      </ul>
    </div>
    </ContainerBody>
  );
}
