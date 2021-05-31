import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Application from './containers/Application.jsx';
import store from './store';

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app')
);
