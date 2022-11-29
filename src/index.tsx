import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './index.css';
import Carte from './pages/Carte';
import Home from 'pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
