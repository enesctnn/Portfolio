import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense
    fallback={<h1 className="text-center text-4xl">Loading...</h1>}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>
);
