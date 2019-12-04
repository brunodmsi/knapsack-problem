import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import history from './services/history';

import Main from './pages/Main';

import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

export default function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
