import React, { memo } from 'react'

import EventWrapper from './style'

import { IoMdAdd } from "react-icons/io";

const CreateEvent = memo(() => {
  return (
    <EventWrapper className='card'>
      
      <IoMdAdd />
      CreateEvent</EventWrapper>
  )
})

export default CreateEvent