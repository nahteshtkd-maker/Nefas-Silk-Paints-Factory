import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WebsiteProvider } from './context/WebsiteContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebsiteProvider>
      <App />
    </WebsiteProvider>
  </StrictMode>,
);
