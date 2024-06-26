import React, { memo } from 'react'

import EventWrapper from './style'

import { IoMdAdd } from "react-icons/io";

const CreateEvent = memo(() => {
  return (
    <EventWrapper className='card'>
      

      <button className='create-btn'> <span>create new event</span> <IoMdAdd className='add-icon' /></button>
      
      <div className='box'></div>
      
      </EventWrapper>
  )
})

export default CreateEvent