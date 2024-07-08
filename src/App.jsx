import React, { memo } from 'react'

import { useRoutes } from 'react-router-dom'
import routes from '@/router'

import AppWrapper from './style'
import Menu from './view/menu/Menu'

const App = memo(() => {
  return (
    <AppWrapper>
      <div className="main">
        <Menu></Menu>
        {useRoutes(routes)}
      </div>
    </AppWrapper>
  )
})

export default App
