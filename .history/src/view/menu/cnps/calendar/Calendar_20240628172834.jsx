import React, { memo, useEffect } from 'react'

import CalendarWrapper from './style'

import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

import { getCalendar } from '@/utils/date_handle'

import dayjs from 'dayjs'
import cache from '@/utils/cache'

const Calendar = memo(() => {
  const dayOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  useEffect(() => {
    //获取当前年份及月份并缓存
    if (!cache.getItem('date')) {
      cache.setItem('date', {
        year: dayjs().get('year'),
        month: dayjs().get('month'),
      })
    }

    //获取日历数据
    getCalendar()
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
    </CalendarWrapper>
  )
})

export default Calendar
