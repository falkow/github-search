import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import { GlobalStyle } from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Form />
    </>
  </React.StrictMode>
);
