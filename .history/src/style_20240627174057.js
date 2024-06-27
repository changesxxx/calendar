import { styled } from 'styled-components'

const appWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  .main {
    box-sizing: border-box;

    display: flex;
    margin: auto;
    max-width: 90%;
    max-height: 86%;

    width: 70%;
    height: 86%;

    /*    min-width: 1160px;
    min-height: 896px; */

    min-width: 1160px;
    min-height: 22rem;

    padding: 0.6rem;

    /* 模糊卡片 */
    backdrop-filter: blur(22px) saturate(130%);
    -webkit-backdrop-filter: blur(22px) saturate(130%);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 1rem;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }
`

export default appWrapper
