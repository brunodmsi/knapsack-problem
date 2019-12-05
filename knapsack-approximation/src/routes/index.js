import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';

export default function routes() {
  return (
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  );
}
