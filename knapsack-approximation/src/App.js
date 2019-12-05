import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes/index';

import GlobalStyle from './styles/global';

import history from './services/history';
import './config/ReactotronConfig';

export default function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}
