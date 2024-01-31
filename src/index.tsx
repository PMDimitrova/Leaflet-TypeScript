import { Theme } from '@radix-ui/themes';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '@radix-ui/themes/styles.css';
import React from 'react';
import './index.css';

import { store } from './state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme accentColor="jade" grayColor="sage" panelBackground="solid" scaling="100%" radius="large">
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
);
