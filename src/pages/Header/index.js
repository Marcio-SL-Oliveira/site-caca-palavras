import React from 'react';

import { ContainerHeader } from './styles';
import Menu from '../Menu';

export default function Header() {
  return (
    <ContainerHeader error={false}>
      <div>
        <p>Caça-Palavras Pro</p>
        <span>login</span>
      </div>
      <Menu />
  </ContainerHeader>
  );
}
