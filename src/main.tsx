import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from './Providers';

// eslint-disable-next-line prettier/prettier
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
