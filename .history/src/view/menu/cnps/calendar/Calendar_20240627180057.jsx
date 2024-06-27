import React, { memo } from 'react'

import CalendarWrapper from './style'

const Calendar = memo(() => {
  return (
    <CalendarWrapper className="card">
      <div className="selector">
        <div className="current-date">Calendar</div>
        <div className="tab">1</div>
      </div>

      <div className="calendar">1</div>
    </CalendarWrapper>
  )
})

export default Calendar
