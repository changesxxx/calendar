import React, { memo, useEffect } from 'react'

import CalendarWrapper from './style'

import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

import { test } from '@/utils/date_handle'

const Calendar = memo(() => {
  const dayOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  function test1() {
    localStorage.setItem(
      JSON.stringify({ name: 'key' }),
      JSON.stringify({ name: 'zs' }),
    )
  }

  useEffect(() => {
    test()
  })

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

      <div className="calendar">
        <div className="day-of-week">
          {dayOfWeek.map((d) => (
            <span className="day" key={d}>
              {d}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={(e) => {
          test1()
        }}
      >
        ++++++
      </button>
    </CalendarWrapper>
  )
})

export default Calendar
