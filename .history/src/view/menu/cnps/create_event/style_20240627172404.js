import { styled } from 'styled-components'

const eventWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: 1;

  padding: 0 5%;

  display: flex;
  align-items: center;

  .create-btn {
    box-sizing: border-box;

    display: flex;
    flex: 6;
    align-items: center;
    justify-content: center;

    color: #fff;

    width: 100px;

    height: 50%;

    background-color: var(--minor-color);

    border-radius: 0.1067;

    cursor: pointer;

    .add-icon {
      margin-left: 0.2133rem;
    }
  }

  .box {
    height: 50%;
    flex: 2;

    /* background-color: #fff; */
  }
`

export default eventWrapper
