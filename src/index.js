import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import './typewriter';
import App from './App';
import AuthProvider from './Context/Authprovider';
// import { Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <AuthProvider>
      {/* <App /> */}
         <App />
    </AuthProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}></Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );