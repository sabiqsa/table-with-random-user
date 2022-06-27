import { createStore, applyMiddleware } from 'redux';
import saga from './globalSagas';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import globalReducers from './globalReducers';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  globalReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(saga);
