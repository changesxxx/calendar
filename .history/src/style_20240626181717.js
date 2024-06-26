import { styled } from 'styled-components'

const appWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  .main {
    margin: auto;
    max-width: 90%;
    max-height: 86%;

    min-width: 1420px;
    min-height: 1010px;

    border-radius: 1rem;

    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(0, 0, 0, 0.75);
    background-color: skyblue;
  }
`

export default appWrapper
