import React, { memo } from 'react'

import AppWrapper from './style'
import Menu from './view/menu/Menu'
import Main from './view/main/Main'

const App = memo(() => {
  return (
    <AppWrapper>
      <div className="main">
        <Menu></Menu>
        <Main></Main>
      </div>
    </AppWrapper>
  )
})

export default App
