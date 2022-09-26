import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

