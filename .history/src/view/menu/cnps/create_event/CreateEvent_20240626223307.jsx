import React, { memo } from 'react'

import EventWrapper from './style'

const CreateEvent = memo(() => {
  return (
    <EventWrapper className='card'>CreateEvent</EventWrapper>
  )
})

export default CreateEvent