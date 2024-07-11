import React, { memo, useEffect, useState } from 'react'

import CalendarWrapper from './style'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
  calendarArrayChange,
  currentDayChange,
  selectedDayChange,
  currentWeekChange,
} from '@/store/modules/date'

import { getCalendar, recentYears, recentMonth } from '@/utils/date_handle'

import dayjs from '@/utils/date_handle'

import cache from '@/utils/cache'
import Selector from './cnps/selector/Selector'
import DateList from './cnps/date_list/DateList'

const Calendar = memo(() => {
  //store数据
  const { calendarArray, today, currentDay } = useSelector(
    (state) => ({
      calendarArray: state.date.calendarArray,
      today: state.date.today,
      currentDay: state.date.currentDay,
    }),
    shallowEqual,
  )

  const dispatch = useDispatch()

  //日期选择模式
  const [selectByDate, setSelectByDate] = useState('date')

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
    dispatch(calendarArrayChange([...getCalendar()]))
  }, [])

  useEffect(() => {
    //获取当前周数据
    if (currentDay) {
      dispatch(currentWeekChange(getCurretnWeek(currentDay)))
    }
  }, [calendarArray])

  //获取当前周数据
  function getCurretnWeek(day = currentDay) {
    return calendarArray.find((w) =>
      w.some(
        (d) =>
          day.years === d.years &&
          day.months === d.months &&
          day.date === d.date,
      ),
    )
  }

  //日期点击事件
  function dayElClickHandle(day) {
    console.log(day)

    //重新设置选中日期
    switch (selectByDate) {
      case 'date':
        dispatch(currentDayChange(day))
        dispatch(selectedDayChange(day))
        dispatch(currentWeekChange(getCurretnWeek(day)))
        break
      case 'months':
        //重新修改当前选中日期
        if (day.years === today.years && day.months === today.months) {
          dispatch(
            currentDayChange({
              ...currentDay,
              years: day.years,
              months: day.months,
              date: day.date,
            }),
          )
        } else {
          dispatch(
            currentDayChange({
              ...currentDay,
              years: day.years,
              months: day.months,
              date: undefined,
            }),
          )
        }
        //重新获取日历数据
        dispatch(
          calendarArrayChange([...getCalendar(currentDay.years, day.months)]),
        )
        //配置好日期跳转到日试图
        setSelectByDate('date')
        break
      case 'years':
        dispatch(currentDayChange({ ...currentDay, years: day.years }))
        console.log('years first', day)

        //重新配置日历数据
        dispatch(calendarArrayChange(recentMonth(day)))
        //配置好日期跳转到月试图
        setSelectByDate('months')
        break
    }
  }

  //切换上一个月/下一个月日历
  function aroundHandle(type) {
    //获取减去后的日期
    let date = null
    //重新获取日历数据并保存
    switch (selectByDate) {
      case 'date':
        date = dateCalculationHandle(type)

        //修改日历数据
        dispatch(
          calendarArrayChange([
            ...getCalendar(date.get('year'), date.get('month')),
          ]),
        )
        //修改当前日期
        if (
          date.get('year') === today.years &&
          date.get('month') === today.months
        ) {
          dispatch(
            currentDayChange({
              ...currentDay,
              years: date.get('year'),
              months: date.get('month'),
              date: today.date,
            }),
          )
        } else {
          dispatch(
            currentDayChange({
              ...currentDay,
              years: date.get('year'),
              months: date.get('month'),
              date: undefined,
            }),
          )
        }
        break
      case 'months':
        date = dateCalculationHandle(type)

        dispatch(calendarArrayChange(recentMonth(date.toObject())))
        dispatch(
          currentDayChange({
            ...currentDay,
            years: date.get('year'),
          }),
        )
        break
      case 'years':
        date = dateCalculationHandle(type)

        dispatch(calendarArrayChange(recentYears(date.toObject())))

        dispatch(
          currentDayChange({
            ...currentDay,
            years: date.get('year'),
          }),
        )

        break
    }
  }

  /* 计算日期  */
  function dateCalculationHandle(type) {
    //获取减去后的日期
    let dateResult = null

    if (type === 'left') {
      switch (selectByDate) {
        case 'date':
          //修改日历数据
          dateResult = dayjs(currentDay).subtract(1, 'month')
          break

        case 'months':
          dateResult = dayjs(currentDay).subtract(1, 'year')
          break
        case 'years':
          dateResult = dayjs(currentDay).subtract(12, 'year')
          break
      }
    } else {
      switch (selectByDate) {
        case 'date':
          //修改日历数据
          dateResult = dayjs(currentDay).add(1, 'month')
          break

        case 'months':
          dateResult = dayjs(currentDay).add(1, 'year')
          break
        case 'years':
          dateResult = dayjs(currentDay).add(12, 'year')
          break
      }
    }

    return dateResult
  }
  //修改日期选择模式
  function changesSelectByDate(mode) {
    setSelectByDate(mode)
    if (mode === 'years') {
      dispatch(calendarArrayChange(recentYears(today)))
    } else if (mode === 'months') {
      dispatch(calendarArrayChange(recentMonth(currentDay)))
    }
  }

  return (
    <CalendarWrapper className="card">
      <Selector
        aroundHandle={aroundHandle}
        selectByDate={selectByDate}
        changesSelectByDate={changesSelectByDate}
        calendarArray={calendarArray}
      ></Selector>

      {/*   <div className="calendar">
        <div className="day-of-week">
          {dayOfWeek.map((d) => (
            <span className="day" key={d}>
              {d}
            </span>
          ))}
        </div>

        <div className="day-list">{dayListElHandle()}</div>
      </div> */}

      <DateList
        calendarArray={calendarArray}
        dayElClickHandle={dayElClickHandle}
        selectByDate={selectByDate}
        today={today}
      ></DateList>
    </CalendarWrapper>
  )
})

export default Calendar
