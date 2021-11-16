import { useState } from 'react';

import React from 'react';
import { Router } from 'react-router';
import history from 'modules/shared/history.js';
import Routes from './routes';
import UserService from 'modules/shared/services/UserService';
import { ScreenSizeProvider } from 'modules/shared/contexts/ScreenSizeContext';
import { BooksProvider } from 'modules/shared/contexts/BooksContext';

function App() {
  if (!UserService.getLoggedUser()) history.push('/login');

  return (
    <ScreenSizeProvider>
      <BooksProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </BooksProvider>
    </ScreenSizeProvider>
  );
}

export default App;
