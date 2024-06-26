import React, { memo } from 'react'

import MenuWrapper from './style'
import CreateEvent from './cnps/create_event/CreateEvent'

const Menu = memo(() => {
  return <MenuWrapper>
    <CreateEvent></CreateEvent>
  </MenuWrapper>
})

export default Menu
