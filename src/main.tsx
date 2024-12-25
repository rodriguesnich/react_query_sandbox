import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
    <div style={{color:'white', width: '100%', height: '5rem'}}>header</div>
    <App /></>
  </StrictMode>,
)
