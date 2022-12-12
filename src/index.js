import React from 'react';
import ReactDOM from 'react-dom/client';
import { StytchProvider } from '@stytch/stytch-react';
import { StytchUIClient } from '@stytch/vanilla-js';
import './index.css';
import './typewriter'
import App from './App';

const stytch = new StytchUIClient('public-token-test-15c8ecbd-4a04-4a3d-82ef-11441eda8b1a');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StytchProvider stytch={stytch}>
    <App />
    </StytchProvider>
  </React.StrictMode>
);
