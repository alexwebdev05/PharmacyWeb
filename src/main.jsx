import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import Presentation from './components/presentation'
import Plan from './components/plan/index'

import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Presentation />
    <Plan />
  </React.StrictMode>,
)
