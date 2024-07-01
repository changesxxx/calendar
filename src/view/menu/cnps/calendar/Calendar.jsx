import React, { memo, useEffect, useState } from 'react'

import CalendarWrapper from './style'
import classnames from 'classnames'

import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

import {
  getCalendar,
  getToday,
  getTodayIndex,
  getDayByFormatMonth,
} from '@/utils/date_handle'

import dayjs from 'dayjs'
import cache from '@/utils/cache'
import Selector from './cnps/selector/Selector'

const Calendar = memo(() => {
  const dayOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  //日历数据
  const [calendarArray, setCalendar] = useState([])
  //当前选中日期 默认为当天
  const [currentDay, setCurrentDay] = useState(getToday())
  //当前日期 所在周
  const [currentWeek, setCurrentWeek] = useState(-1)
  //日期选择模式
  const [selectByDate, setSelectByDate] = useState('day')

  useEffect(() => {
    //获取当前年份及月份并缓存
    if (
      !cache.getItem('date') ||
      dayjs().get('year') === cache.getItem('date').year ||
      dayjs().get('month') === cache.getItem('date').month
    ) {
      cache.setItem('date', {
        year: dayjs().get('year'),
        month: dayjs().get('month'),
      })
    }

    //获取日历数据
    setCalendar([...getCalendar()])

    //获取当前index位置
    setCurrentWeek(getTodayIndex(dayjs()))
  }, [])

  //日期点击事件
  function dayElClickHandle(day) {
    //重新设置日期所在周
    setCurrentWeek(getTodayIndex(day))
    //重新设置选中日期
    setCurrentDay(day)
  }

  //渲染日历数据转换为页面显示元素(包含选中样式的添加)
  function dayListElHandle() {
    return calendarArray.map((week, index) => {
      let weekClass = classnames('day-of-week', {
        'week-active': currentWeek === index,
      })

      return (
        <div key={index} className={weekClass}>
          {week.map((d) => {
            let dayClass = 'day'

            if (
              currentDay.get('date') === d.get('date') &&
              currentDay.get('month') === d.get('month')
            ) {
              dayClass += ' active'
            }

            if (currentDay.get('month') !== d.get('month')) {
              dayClass += ' obsolete'
            }

            return (
              <span
                className={dayClass}
                key={d}
                onClick={(e) => {
                  dayElClickHandle(d)
                }}
              >
                {d.get('date')}
              </span>
            )
          })}
        </div>
      )
    })
  }

  //切换上一个月/下一个月日历
  function aroundHandle(type) {
    switch (type) {
      case 'left':
        //获取减去后的日期
        const subDay = currentDay.subtract(1, 'month')
        //重新获取日历数据并保存
        setCalendar([...getCalendar(subDay.get('year'), subDay.get('month'))])
        //修改当前日期
        setCurrentDay(currentDay.subtract(1, 'month'))
        //修改当前日期所在周
        setCurrentWeek(getTodayIndex(subDay))
        break
      case 'right':
        const addDay = currentDay.add(1, 'month')
        setCalendar([...getCalendar(addDay.get('year'), addDay.get('month'))])
        setCurrentDay(currentDay.add(1, 'month'))
        setCurrentWeek(getTodayIndex(addDay))
        break
    }
  }

  //修改日期选择模式
  function changesSelectByDate(mode) {
    setSelectByDate(mode)
  }

  return (
    <CalendarWrapper className="card">
      <Selector
        currentDay={currentDay}
        aroundHandle={aroundHandle}
        selectByDate={selectByDate}
        changesSelectByDate={changesSelectByDate}
      ></Selector>

      <div className="calendar">
        <div className="day-of-week">
          {dayOfWeek.map((d) => (
            <span className="day" key={d}>
              {d}
            </span>
          ))}
        </div>

        <div className="day-list">{dayListElHandle()}</div>
      </div>
    </CalendarWrapper>
  )
})

export default Calendar
