import React, { memo, useEffect } from 'react'

import classnames from 'classnames'

import DateListWrapper from './style'
import dayjs from 'dayjs'

const DateList = memo((props) => {

  const dayOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const { calendarArray,currentDay,currentWeek,dayElClickHandle,selectByDate } = props
  


  useEffect(() => { 
    console.log('currentDay:',currentDay)
  })


  function activeHandle (d) {

    let flag = false 

    switch (selectByDate) { 
      case 'date':
     flag =  (currentDay.get('date') === d.get('date') &&
     currentDay.get('month') === d.get('month'))
        break
      case 'month':
        flag = (
        dayjs().get('month') === d.get('month'))
        break
     case 'year':
      flag = (
        dayjs().get('year') === d.get('year'))
          break
    }

    return flag

   }
  


  //渲染日历数据转换为页面显示元素(包含选中样式的添加)
  function dayListElHandle () { 

    return calendarArray.map((week, index) => {
      let weekClass = classnames('day-of-week', {
        'week-active': currentWeek === index,
      })

      return (
        <div key={index} className={weekClass}>
          {week.map((d) => {
  /*           let dayClass = 'day'

            if (
              currentDay.get('date') === d.get('date') &&
              currentDay.get('month') === d.get('month')
            ) {
              dayClass += ' active'
            }

            if (currentDay.get('month') !== d.get('month')) {
              dayClass += ' obsolete'
            } */

            return (
              <span
                className={classnames("day",{active:activeHandle(d)})}
                key={d}
                onClick={(e) => {
                  dayElClickHandle(d)
                }}
              >

                {selectByDate=== 'month' ? d.get(selectByDate) +1 :d.get(selectByDate)}
              
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
     {/*    <div className="day-list">{setSelectByDate === 'day' ? dayListElHandle() :yearAndMonthElHandle()}</div> */}
    </DateListWrapper>
  )
})

export default DateList