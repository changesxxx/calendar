import React, { memo } from 'react'

import classnames from 'classnames'

import HeaderWrapper from './style'

const Header = memo((props) => {
  const { modeHandle, calendarMode } = props

  const dateArr = [16, 17, 18, 19, 20, 21, 22]

  return (
    <HeaderWrapper>
      <div className="options">
        <div className="date">
          <span>December</span>,<span>2023</span>
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

        <div className="today options-card">Today</div>
      </div>

      {true && (
        <div className="options-day">
          {dateArr.map((d) => {
            return (
              <div className="options-card day-item" key={d}>
                <div className="day-week-name">Sunday</div>
                <div className="day">{d}</div>
              </div>
            )
          })}
        </div>
      )}
    </HeaderWrapper>
  )
})

export default Header
