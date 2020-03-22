import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './reducers/index';
import { StoreState } from './types/index';

import './index.css';
import Hello from './containers/Hello';

const store = createStore<StoreState>(counterReducer, {
  counter: 1,
  name: 'World',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
