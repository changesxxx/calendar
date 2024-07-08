import React, { memo } from 'react'

import WeekWrapper from './style'
import { Line } from './style'

const Week = memo(() => {
  const timeArr = [
    '0am',
    '1am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '13pm',
    '14pm',
    '15pm',
    '16pm',
    '17pm',
    '18pm',
    '19pm',
    '20pm',
    '21pm',
    '22pm',
    '23pm',
  ]

  const date = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  function dateElHandle() {
    return date.map((day) => {
      return (
        <div className="week-of-day" key={day}>
          {timeArr.map((time, index) => {
            return (
              <div className="day-time" key={index + 'time'}>
                {time}
              </div>
            )
          })}
        </div>
      )
    })
  }
  return (
    <WeekWrapper>
      <div className="time-container">
        {timeArr.map((time, index) => {
          return (
            <div className="time" key={index}>
              <div key={time + 'span'}>{time}</div>
            </div>
          )
        })}
      </div>

      <div className="date-container">
        {timeArr.map((t, index) => {
          return <Line $top={index * 7.5} key={index}></Line>
        })}

        {dateElHandle()}
      </div>
    </WeekWrapper>
  )
})

export default Week
