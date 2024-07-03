import React from 'react'

import ReactDOM from 'react-dom/client'

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
    <App />
  </Provider>,
)
