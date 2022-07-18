import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'

import { store } from './store/index'

import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <Provider store={ store }>
    <App />
  </Provider>
</React.StrictMode>)