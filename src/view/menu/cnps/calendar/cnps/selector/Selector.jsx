import React, { memo, useEffect, useState } from 'react'

import SelectorWrapper from './style'

import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

import { getDayByFormatMonth, recentYears } from '@/utils/date_handle'

import _ from 'lodash'

const Selector = memo((props) => {
  const {
    currentDay,
    aroundHandle,
    selectByDate,
    changesSelectByDate,
    calendarArray,
  } = props

  //上一个/下一个点击事件
  function iconHandle(type) {
    aroundHandle(type)
  }

  function selectHandle() {
    switch (selectByDate) {
      case 'date':
        changesSelectByDate('month')
        break
      case 'month':
        changesSelectByDate('year')
        break
    }
  }

  useEffect(() => {})

  return (
    <SelectorWrapper>
      <div className="current-date" onClick={(e) => selectHandle()}>
        <>
          {selectByDate === 'date' && (
            <span style={{ marginRight: '0.4rem' }}>
              {getDayByFormatMonth(currentDay)}
            </span>
          )}

          {selectByDate !== 'year' && <span>{currentDay.years}</span>}
        </>
        {selectByDate === 'year' && (
          <>
            {_.first(_.first(calendarArray))?.years}-
            {_.last(_.last(calendarArray))?.years}
          </>
        )}
      </div>
      <div className="tab">
        <div
          className="card icon"
          style={{ marginRight: '0.8rem' }}
          onClick={(e) => {
            iconHandle('left')
          }}
        >
          <HiOutlineChevronLeft></HiOutlineChevronLeft>
        </div>
        <div
          className="card icon"
          onClick={(e) => {
            iconHandle('right')
          }}
        >
          <HiOutlineChevronRight></HiOutlineChevronRight>
        </div>
      </div>
    </SelectorWrapper>
  )
})

export default Selector
