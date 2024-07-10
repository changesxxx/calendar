import React, { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import EventWrapper from './style'

import { IoMdAdd } from 'react-icons/io'

const CreateEvent = memo(() => {
  const navigate = useNavigate()

  return (
    <EventWrapper className="card">
      <button className="create-btn" onClick={(e) => navigate('/createEvent')}>
        <span>create new event</span> <IoMdAdd className="add-icon" />
      </button>

      <div className="box"></div>
    </EventWrapper>
  )
})

export default CreateEvent
