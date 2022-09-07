import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css'

import AuthContextProvider from './contexts/authContext';
import PostContextProvider from './contexts/postContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </PostContextProvider>
  </React.StrictMode>
);

