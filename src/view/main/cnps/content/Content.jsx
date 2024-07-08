import React, { memo } from 'react'

import ContentWrapper from './style'
import Week from './cnps/week/Week'

const Content = memo(() => {
  return (
    <ContentWrapper>
      <Week></Week>
    </ContentWrapper>
  )
})

export default Content
