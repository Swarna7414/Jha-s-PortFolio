import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
// @ts-ignore
import "@fontsource/pacifico";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)