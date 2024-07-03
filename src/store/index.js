import { configureStore } from '@reduxjs/toolkit'

import dateReducer from './modules/date'

const store = configureStore({
  reducer: {
    date: dateReducer,
  },
})

export default store
