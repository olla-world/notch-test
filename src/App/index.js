import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Router from './components/Router';
import NavBar from './components/NavBar';

import routes, { routePath } from './routes';

const navLinks = [
  { text: 'Notch', href: routePath('home') }
];

const App = props => (
  <Provider store={store}>
    <Router routes={routes}>
      <NavBar links={navLinks} />
    </Router>
  </Provider>
);

export default App;