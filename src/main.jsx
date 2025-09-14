import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './commons.css'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
