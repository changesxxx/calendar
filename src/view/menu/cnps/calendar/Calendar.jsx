import React, { memo, useEffect, useState } from 'react'

import CalendarWrapper from './style'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { calendarArrayChange ,currentDayChange} from '@/store/modules/date'

import {
  getCalendar,
  getToday,
  getTodayIndex,
  recentYears,
} from '@/utils/date_handle'

import dayjs from '@/utils/date_handle'

import cache from '@/utils/cache'
import Selector from './cnps/selector/Selector'
import DateList from './cnps/date_list/DateList'

const Calendar = memo(() => {

  //store数据
  const { calendarArray ,today,currentDay} = useSelector(
    (state) => ({
      calendarArray: state.date.calendarArray,
      today: state.date.today,
      currentDay:state.date.currentDay
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


    // console.log('useEffect setSelectByDate:',selectByDate)
  }, [])

  //日期点击事件
  function dayElClickHandle (day) {
    
    console.log(day)

    //重新设置选中日期
    switch (selectByDate) {
      case 'date':
        dispatch(currentDayChange(day))
        break
      case 'months':
        // dispatch(currentDayChange({...currentDay,year:currentDay.year,month:day.get('month')}))
     /*    setCurrentDay(
          dayjs()
            .set('year', currentDay.get('year'))
            .set('month', day.get('month')),
        ) */
        //重新修改当前选中日期 
         dispatch(currentDayChange({...currentDay,years:currentDay.years,months:day.months,date:undefined}))
        //重新获取日历数据
        dispatch(calendarArrayChange([...getCalendar(currentDay.years, day.months)]))
        // setCalendar([...getCalendar(currentDay.get('year'), day.get('month'))])
        //配置好日期跳转到日试图
        setSelectByDate('date')
        break
      case 'years':
        if (day.years === currentDay.years) {
          dispatch(currentDayChange({ ...currentDay, years: day.years}))
        } else { 
          dispatch(currentDayChange({...currentDay,years:day.years,months:undefined,date:undefined}))
        }
        // setCurrentDay(dayjs().set('year', day.get('year')))
        //配置好日期跳转到月试图
        setSelectByDate('months')
        break
    }
  }

  //切换上一个月/下一个月日历
  function aroundHandle (type) {
    
    switch (type) {
      case 'left':
        //获取减去后的日期
        const subDay = dayjs(currentDay).subtract(1, 'month')
        //重新获取日历数据并保存
        dispatch(calendarArrayChange([...getCalendar(subDay.get('year'), subDay.get('month'))]))
        // setCalendar([...getCalendar(subDay.get('year'), subDay.get('month'))])
        //修改当前日期
        // setCurrentDay(currentDay.subtract(1, 'month'))
        dispatch(currentDayChange({...currentDay,years:subDay.get('year'),months:subDay.get('month')}))
        break
      case 'right':
        const addDay = dayjs(currentDay).add(1, 'month')
        dispatch(calendarArrayChange([...getCalendar(addDay.get('year'), addDay.get('month'))]))
        // setCalendar([...getCalendar(addDay.get('year'), addDay.get('month'))])
        // setCurrentDay(currentDay.add(1, 'month'))
        dispatch(currentDayChange({...currentDay,years:addDay.get('year'),months:addDay.get('month')}))
        break
    }
  }

  //修改日期选择模式
  function changesSelectByDate(mode) {
    setSelectByDate(mode)

    dispatch(calendarArrayChange(recentYears(currentDay)))

    // setCalendar(recentYears(currentDay))
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
      >
        {' '}
      </DateList>
    </CalendarWrapper>
  )
})

export default Calendar
