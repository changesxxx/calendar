import React from 'react'

import ReactDOM from 'react-dom/client'

//router
import { BrowserRouter } from 'react-router-dom'

//css重置
import 'normalize.css'
import '@/assets/css/index.css'

//store
import { Provider } from 'react-redux'
import store from '@/store'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
