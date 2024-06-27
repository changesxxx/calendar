import React, { memo } from 'react'

import CalendarWrapper from './style'

const Calendar = memo(() => {
  return (
    <CalendarWrapper className="card">
      <div className="selector">Calendar</div>

      <div className="calendar"></div>
    </CalendarWrapper>
  )
})

export default Calendar
