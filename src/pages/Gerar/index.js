import React from 'react';

import Header from '../Header';
import { ContainerGerar } from './styles';

export default function Gerar({ match }) {
  return (
    <>
      <Header />
      <ContainerGerar>
        <h1>Gerar! Em Breve, bem breve mesmo!</h1>
      </ContainerGerar>
    </>
  );
}
