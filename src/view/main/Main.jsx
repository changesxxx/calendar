import React, { memo, useState } from 'react'

import MainWrapper from './style'

import Header from './cnps/header/Header'
import Content from './cnps/content/Content'

const Main = memo(() => {
  //展示日历数据形式
  const [mode, setMode] = useState('week')

  function changeMode(mode) {
    setMode(mode)
  }

  return (
    <MainWrapper>
      <Header modeHandle={changeMode} calendarMode={mode}></Header>

      <Content></Content>
    </MainWrapper>
  )
})

export default Main
