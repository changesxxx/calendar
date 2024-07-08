import { createSlice } from '@reduxjs/toolkit'
import cache from '@/utils/cache'

const eventReducer = createSlice({
  name: 'event',
  initialState: {
    categoryList: cache.getItem('categoryList'),
  },
  reducers: {
    categoryListChange(store, { payload }) {
      store.categoryList = payload
      //缓存浏览器
      cache.setItem('categoryList', payload)
    },
  },
})

export const { categoryListChange } = eventReducer.actions

export default eventReducer.reducer
