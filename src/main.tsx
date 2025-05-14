import './index.css'

import Pages from './Pages.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
