import React, { memo } from 'react'

import EventWrapper from './style'

import { IoMdAdd } from "react-icons/io";

const CreateEvent = memo(() => {
  return (
    <EventWrapper className='card'>
      

      <button className='create-btn'><IoMdAdd className='add-icon' /> <span>创建日程</span></button>
      
      <div className='box'></div>
      
      </EventWrapper>
  )
})

export default CreateEvent