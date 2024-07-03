import React, { memo, useEffect } from 'react'

import classnames from 'classnames'

import DateListWrapper from './style'
import dayjs from 'dayjs'

const DateList = memo((props) => {
  const dayOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const {
    calendarArray,
    currentDay,
    currentWeek,
    dayElClickHandle,
    selectByDate,
    today,
  } = props

  useEffect(() => {
    console.log('calendarArray:', calendarArray)
  })

  function activeHandle(d) {
    let flag = false

    /*   console.log(
      currentDay.get('month'),
      currentDay.get('date'),
      '-',
      d.get('month'),
      d.get('date'),
    ) */

    switch (selectByDate) {
      case 'date':
        flag = today.date === d.date && today.months === d.months
        break
      case 'month':
        flag = today.months === d.months
        break
      case 'year':
        flag = today.years === d.years
        break
    }

    return flag
  }

  //渲染日历数据转换为页面显示元素(包含选中样式的添加)
  function dayListElHandle() {
    return calendarArray.map((week, index) => {
      let weekClass = classnames('day-of-week', {
        'week-active': currentWeek === index,
      })

      return (
        <div key={index} className={weekClass}>
          {week.map((d, index) => {
            let dayClass = 'day'

            if (currentDay.date === d.date && currentDay.months === d.months) {
              dayClass += ' active'
            }

            if (currentDay.months !== d.months) {
              dayClass += ' obsolete'
            }

            return (
              <span
                className={classnames('day', { active: activeHandle(d) })}
                key={index}
                onClick={(e) => {
                  dayElClickHandle(d)
                }}
              >
                {selectByDate === 'month'
                  ? d[selectByDate] + 1
                  : d[selectByDate]}
              </span>
            )
          })}
        </div>
      )
    })
  }

  return (
    <DateListWrapper>
      <div className="day-of-week">
        {dayOfWeek.map((d) => (
          <span className="day" key={d}>
            {d}
          </span>
        ))}
      </div>

      <div className="day-list">{dayListElHandle()}</div>
    </DateListWrapper>
  )
})

export default DateList
