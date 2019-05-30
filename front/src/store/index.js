import Raven from 'raven-js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRavenMiddleware from 'raven-for-redux';

import sagas from './sagas';
import reducers from './ducks';

Raven.config('https://6a3bfa7b77ad4205a04b3a145912fbff@sentry.io/1282514').install();
const middlewares = [];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(createRavenMiddleware(Raven, {}));

const store = process.env.NODE_ENV === 'development' ? createStore(persistedReducer, compose(applyMiddleware(...middlewares), console.tron.createEnhancer())) : createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
