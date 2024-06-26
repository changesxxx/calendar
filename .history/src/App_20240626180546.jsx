import React, { memo } from 'react'

import second from './style'

const App = memo(() => {
  return (
    <div style={{ height: '100%', weight: '100%', display: 'flex' }}>
      <div className="main"></div>
    </div>
  )
})

export default App
