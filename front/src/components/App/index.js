import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from '~/styles/global';
import Routes from '~/routes';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Carregando</p>} persistor={persistor}>
        <>
          <CssBaseline />

          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
