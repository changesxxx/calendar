import { createSlice } from '@reduxjs/toolkit'

import { getToday } from '@/utils/date_handle'

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    //当天
    today: getToday(),
    //日历数据
    calendarArray: [],
    //当前选中日期
    currentDay: getToday(),
  },
  reducers: {
    calendarArrayChange(state, { payload }) {
      state.calendarArray = payload
    },
    currentDayChange(state, { payload }) {
      state.currentDay = payload
    },
  },
})

export const { calendarArrayChange, currentDayChange } = dateSlice.actions

export default dateSlice.reducer
