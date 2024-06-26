import React, { memo } from 'react'

import AppWrapper from './style'

const App = memo(() => {
  return (
    <AppWrapper>
      <div className="main"></div>
    </AppWrapper>
  )
})

export default App
