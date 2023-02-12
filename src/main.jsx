import React from 'react'
import ReactDOM from 'react-dom/client'
import Countdown from './Countdown'
import FormAttend from './FormAttend'
import './index.css'

ReactDOM.createRoot(document.getElementById('form-attend')).render(
  <React.StrictMode>
    <FormAttend />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('countdown')).render(
  <React.StrictMode>
    <Countdown />
  </React.StrictMode>
)
