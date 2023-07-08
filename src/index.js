import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Bootstrap } from 'react-bootstrap'
import { AuthContextWrapper } from "./context/auth.context.jsx";

import { BrowserRouter as Router } from 'react-router-dom';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
 
root.render(
  <React.StrictMode>
    
    <AuthContextWrapper>
      <Router>
        <App />
      </Router>
    </AuthContextWrapper>
  
     </React.StrictMode>
);
 
 
reportWebVitals();