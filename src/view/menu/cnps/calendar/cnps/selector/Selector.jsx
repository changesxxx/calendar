import React, { memo, useEffect, useState } from 'react'


import { useSelector,  shallowEqual } from 'react-redux'

import SelectorWrapper from './style'


import { HiOutlineChevronLeft } from 'react-icons/hi'
import { HiOutlineChevronRight } from 'react-icons/hi'

import { getDayByFormatMonth, recentYears } from '@/utils/date_handle'

import _ from 'lodash'

const Selector = memo((props) => {
  
  const {
    aroundHandle,
    selectByDate,
    changesSelectByDate,
    calendarArray,
  } = props


    //store数据
    const { currentDay} = useSelector(
      (state) => ({
        currentDay:state.date.currentDay
      }),
      shallowEqual,
    )

  //上一个/下一个点击事件
  function iconHandle(type) {
    aroundHandle(type)
  }

  function selectHandle() {
    switch (selectByDate) {
      case 'date':
        changesSelectByDate('months')
        break
      case 'months':
        changesSelectByDate('years')
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

          {selectByDate !== 'years' && <span>{currentDay.years}</span>}
        </>
        {selectByDate === 'years' && (
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
