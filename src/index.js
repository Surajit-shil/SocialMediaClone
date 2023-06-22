import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextProvider} from './Context/Darkmode';
import { AuthContextProvider } from './Context/Auth';
// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <DarkModeContextProvider>
    <AuthContextProvider>
     <App />
    </AuthContextProvider>
  </DarkModeContextProvider>
  </BrowserRouter>
);
