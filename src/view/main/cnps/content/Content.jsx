import React, { memo } from 'react'

import ContentWrapper from './style'

const Content = memo(() => {
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

  function weekTimeContainer() {
    return
  }

  return (
    <ContentWrapper>
      <div className="content-by-week">
        {timeArr.map((time) => {
          return (
            <div className="time" key={time}>
              <div key={time + 'span'}>{time}</div>
            </div>
          )
        })}
      </div>
    </ContentWrapper>
  )
})

export default Content
