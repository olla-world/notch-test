import { combineReducers } from 'redux';

import { default as orders } from '../Orders/reducers';

const createRootReducers = () =>
  combineReducers({
    orders
  });

export default createRootReducers;