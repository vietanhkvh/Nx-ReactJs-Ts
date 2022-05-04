import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { TODOS_FEATURE_KEY, todosReducer } from './app/todos.slice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: { [TODOS_FEATURE_KEY]: todosReducer },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
