import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerMenu } from './styles';

export default function Menu() {
  return(
    <ContainerMenu>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/gerar">Gerar</Link></li>
          <li><Link to="/baixar">Baixar</Link></li>
        </ul>
      </nav>
  </ContainerMenu>
  );
}
