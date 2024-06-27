import React, { memo } from 'react'

import MenuWrapper from './style'
import CreateEvent from './cnps/create_event/CreateEvent'
import Calendar from './cnps/calendar/Calendar'

const Menu = memo(() => {
  return (
    <MenuWrapper>
      <CreateEvent></CreateEvent>
      <Calendar></Calendar>

      <CreateEvent></CreateEvent>
      <CreateEvent></CreateEvent>
      <CreateEvent></CreateEvent>
      <CreateEvent></CreateEvent>
      <CreateEvent></CreateEvent>
      <CreateEvent></CreateEvent>
    </MenuWrapper>
  )
})

export default Menu
