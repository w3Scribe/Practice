import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CompA from './components/CompA.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <CompA/>
    </App>
  </StrictMode>,
)
