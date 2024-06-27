import React, { memo } from 'react'

import CalendarWrapper from './style'

import { HiChevronLeft } from 'react-icons/hi'
import { HiChevronRight } from 'react-icons/hi'

const Calendar = memo(() => {
  return (
    <CalendarWrapper className="card">
      <div className="selector">
        <div className="current-date">
          <span>July</span>
          <span>2022</span>
        </div>
        <div className="tab">
          <div>
            <HiChevronLeft></HiChevronLeft>
          </div>
          <div>
            <HiChevronRight></HiChevronRight>
          </div>
        </div>
      </div>

      <div className="calendar">1</div>
    </CalendarWrapper>
  )
})

export default Calendar
