import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducers from './reducers';

const initialStore = {};

const store = createStore(
  createRootReducers(),
  initialStore,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;

