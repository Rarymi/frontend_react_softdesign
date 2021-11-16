import { useState } from 'react';

import React from 'react';
import { Router } from 'react-router';
import history from 'modules/shared/history.js';
import Routes from './routes';
import UserService from 'modules/shared/services/UserService';

function App() {
  if (!UserService.getLoggedUser()) history.push('/login');

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
