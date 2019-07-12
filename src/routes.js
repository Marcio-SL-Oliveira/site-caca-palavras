import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Gerar from './pages/Gerar';
import Baixar from './pages/Baixar';
import Jogar from './pages/Jogar';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/gerar" component={Gerar} />
        <Route path="/baixar" component={Baixar} />
        <Route path="/jogar/:parametros" component={Jogar} />
      </Switch>
    </BrowserRouter>
  );
}
