import React from 'react';
import { Routes } from './routes';
import { AppProviders } from './contexts/providers';

function App(): JSX.Element {
    return (
    <AppProviders>
      <Routes />
    </AppProviders>
  );
}

export default App;
