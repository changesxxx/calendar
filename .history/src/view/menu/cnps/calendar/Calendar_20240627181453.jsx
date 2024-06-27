import React, { memo } from 'react'

import CalendarWrapper from './style'

import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

const Calendar = memo(() => {
  return (
    <CalendarWrapper className="card">
      <div className="selector">
        <div className="current-date">
          <span style={{ marginRight: '0.4rem' }}>July</span>
          <span>2022</span>
        </div>
        <div className="tab">
          <div className="card icon" style={{ marginRight: '0.8rem' }}>
            <HiOutlineChevronLeft></HiOutlineChevronLeft>
          </div>
          <div className="card icon">
            <HiOutlineChevronRight></HiOutlineChevronRight>
          </div>
        </div>
      </div>

      <div className="calendar">1</div>
    </CalendarWrapper>
  )
})

export default Calendar
