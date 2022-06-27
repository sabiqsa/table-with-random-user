import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';

import { store } from './redux/stores';

// import saga from './redux/globalSagas';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import globalReducers from './redux/globalReducers';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   globalReducers,
//   composeWithDevTools(applyMiddleware(sagaMiddleware)),
// );

// sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
