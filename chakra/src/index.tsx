import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `SaasProvider` component. This wraps the `ChakraProvider` component.
import { SaasProvider } from '@saas-ui/react'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // 2. Wrap SaasProvider at the root of your app
    <SaasProvider>
        <App />
    </SaasProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
