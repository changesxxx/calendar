import React, { memo } from 'react'

import AppWrapper from './style'

const App = memo(() => {
  return (
    <AppWrapper style={{ height: '100%', weight: '100%', display: 'flex' }}>
      <div className="main"></div>
    </AppWrapper>
  )
})

export default App
