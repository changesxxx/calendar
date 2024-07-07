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
    //用户切换但为点击时所处位置的日期
    selectedDay: getToday(),
    //当前周数据
    currentWeek: [],
  },
  reducers: {
    calendarArrayChange(state, { payload }) {
      state.calendarArray = payload
    },
    currentDayChange(state, { payload }) {
      state.currentDay = payload
    },
    selectedDayChange(state, { payload }) {
      state.selectedDay = payload
    },
    currentWeekChange(state, { payload }) {
      state.currentWeek = payload
    },
  },
})

export const {
  calendarArrayChange,
  currentDayChange,
  selectedDayChange,
  currentWeekChange,
} = dateSlice.actions

export default dateSlice.reducer
