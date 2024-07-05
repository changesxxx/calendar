import React, { memo, useEffect } from 'react'

import { useSelector, shallowEqual } from 'react-redux'

import { getTodayIndex } from '@/utils/date_handle'

import classnames from 'classnames'

import DateListWrapper from './style'

const DateList = memo((props) => {
  const dayOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const { calendarArray, dayElClickHandle, selectByDate } = props

  //store数据
  const { currentDay, today } = useSelector(
    (state) => ({
      currentDay: state.date.currentDay,
      today: state.date.today,
    }),
    shallowEqual,
  )

  useEffect(() => {
    // console.log('calendarArray:', calendarArray)
  })

  function activeHandle(d) {
    let flag = false

    if (selectByDate === 'date') {
      flag =
        currentDay.date === d.date &&
        currentDay.months === d.months &&
        currentDay.years === d.years
    }

    return flag
  }

  function selectedHandle(d) {
    let flag = false
    switch (selectByDate) {
      case 'date':
        flag =
          today.date === d.date &&
          today.months === d.months &&
          today.years === d.years
        break
      case 'months':
        flag = today.months === d.months && today.years === d.years
        break
      case 'years':
        flag = today.years === d.years
        break
    }

    return flag
  }

  //渲染日历数据转换为页面显示元素(包含选中样式的添加)
  function dayListElHandle() {
    return calendarArray.map((week, index) => {
      let weekClass = classnames('day-of-week', {
        'week-active':
          selectByDate === 'date' && getTodayIndex(currentDay) === index,
      })

      return (
        <div key={index} className={weekClass}>
          {week.map((d, index) => {
            let dayClass = 'day'

            if (currentDay.date === d.date && currentDay.months === d.months) {
              dayClass += ' selected'
            }

            if (currentDay.months !== d.months) {
              dayClass += ' obsolete'
            }

            return (
              <span
                className={classnames('day', {
                  selected: selectedHandle(d),
                  active: activeHandle(d),
                })}
                key={index}
                onClick={(e) => {
                  dayElClickHandle(d)
                }}
              >
                {selectByDate === 'months'
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
