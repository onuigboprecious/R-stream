import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import './typewriter';
import App from './App';
import AuthProvider from './Context/Authprovider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
