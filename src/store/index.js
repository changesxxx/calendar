import { configureStore } from '@reduxjs/toolkit'

import dateReducer from './modules/date'
import eventReducer from './modules/event'

const store = configureStore({
  reducer: {
    date: dateReducer,
    event: eventReducer,
  },
})

export default store
