// import express from 'express';
import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';
// const server = express();

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
