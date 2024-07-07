import React, { memo } from 'react'

import classnames from 'classnames'
import { useSelector, shallowEqual ,useDispatch} from 'react-redux'

import {currentDayChange,selectedDayChange,calendarArrayChange} from '@/store/modules/date'

import {getDayByFormatMonth,getCalendar,getDayByFormatWeek} from '@/utils/date_handle'

import HeaderWrapper from './style'

const Header = memo((props) => {
  const { modeHandle, calendarMode } = props


  const { currentDay, today,currentWeek } = useSelector((state) => ({
    currentWeek: state.date.currentWeek,
    currentDay: state.date.currentDay,
    today:state.date.today
  }), shallowEqual)
  
  const dispatch =  useDispatch()


  function todayHandle () { 

    if (currentDay.years !== today.years || currentDay.months !== today.months || currentDay.date !== today.date) { 
      dispatch(currentDayChange({ ...today }))
      dispatch(selectedDayChange({ ...today }))

      //重新获取日历数据
      dispatch(calendarArrayChange([...getCalendar()]))
    }
  }

  return (
    <HeaderWrapper>
      <div className="options">
        <div className="date">
          <span>{getDayByFormatMonth(currentDay)}</span>,<span>{currentDay.years }</span>
        </div>
        <div className="option options-card">
          {['month', 'week', 'day'].map((o) => {
            let activeClass = classnames('option-item', {
              active: o === calendarMode,
            })

            return (
              <div
                className={activeClass}
                onClick={(e) => modeHandle(o)}
                key={o}
              >
                {o}
              </div>
            )
          })}
        </div>

        <div className="today options-card" onClick={e =>todayHandle() }>Today</div>
      </div>

      {true && (
        <div className="options-day">
          {currentWeek && currentWeek.map((d,index) => {

        
            
            
            return (
              <div className={classnames('options-card', 'day-item', {active:d.years === currentDay.years && d.months === currentDay.months &&d.date === currentDay.date})}  key={d.date} >
                <div className="day-week-name">{ getDayByFormatWeek (index)}</div>
                <div className="day">{d.date}</div>
              </div>
            )
          })}
        </div>
      )}
    </HeaderWrapper>
  )
})

export default Header
