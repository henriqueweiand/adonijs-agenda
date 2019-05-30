import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';

function App() {
  return (
    <>
      <CssBaseline />

      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
