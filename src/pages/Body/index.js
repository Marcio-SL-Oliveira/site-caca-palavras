import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerBody } from './styles';

export default function Body() {
  const [lista, setLista] = useState([
    [0, "item x01"],[1,"item x02"], [2,"item 03"], [3, "item 04"],
    [4, "item 05"],
  ]);

  return(
    <ContainerBody>
      <div>
        <h1>Escolha um Caça-Palavras</h1>
        <ul>
          { lista.map(lista =>
            <Link to={`/jogar/${lista[0]}`}> <li>{lista[1]}</li>
            </Link>)
           }
      </ul>
    </div>
    </ContainerBody>
  );
}
