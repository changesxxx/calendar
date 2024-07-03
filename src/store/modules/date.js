import { createSlice } from '@reduxjs/toolkit'

import { getToday } from '@/utils/date_handle'

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    //当天
    today: getToday(),
    //日历数据
    calendarArray: [],
  },
  reducers: {
    calendarArrayChange(state, { payload }) {
      console.log(payload)

      state.calendarArray = payload
    },
  },
})

export const { calendarArrayChange } = dateSlice.actions

export default dateSlice.reducer
