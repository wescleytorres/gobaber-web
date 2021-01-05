import React from 'react';
import { BrowserRouter as Browser } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Browser>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Browser>
);

export default App;
