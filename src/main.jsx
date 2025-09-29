import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//  "scripts": {
//     "start": "vite",
//     "build": "vite build",
//     "lint": "eslint .",
//     "electron": "cross-env NODE_ENV=development electron .",
//     "dev": "concurrently \"npm run start\" \"npm run electron\"",
//     "preview": "vite preview"
//   },
