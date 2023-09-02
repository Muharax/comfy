import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OpenModalContextProvider } from './context/OpenModalContext';
import { AuthContextProvider } from './context/AuthContext';

/*======================================*/
/*======================================*/
/*======================================*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <OpenModalContextProvider>
        <App />
      </OpenModalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
); 