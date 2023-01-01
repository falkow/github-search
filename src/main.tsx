import React from 'react';
import ReactDOM from 'react-dom/client';
const Form = React.lazy(() => import('./components/Form'));
// import Form from './components/Form';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Form />
    </ThemeProvider>
  </React.StrictMode>
);
