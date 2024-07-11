import { createSlice } from '@reduxjs/toolkit'
import cache from '@/utils/cache'

const eventReducer = createSlice({
  name: 'event',
  initialState: {
    categoryList: cache.getItem('categoryList'),
    eventList: cache.getItem('eventList') || [],
  },
  reducers: {
    categoryListChange(store, { payload }) {
      store.categoryList = payload
      //缓存浏览器
      cache.setItem('categoryList', payload)
    },
    eventListChange(store, { payload }) {
      store.categoryList = payload
      //缓存浏览器
      cache.setItem('eventList', payload)
    },
  },
})

export const { categoryListChange, eventListChange } = eventReducer.actions

export default eventReducer.reducer
