import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './components/layout/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Layout>
        <App />
    </Layout>
);
