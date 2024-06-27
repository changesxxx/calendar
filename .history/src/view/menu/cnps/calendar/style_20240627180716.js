import { styled } from 'styled-components'

const calendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 5;

  .selector {
    display: flex;

    justify-content: space-between;
    height: 2.1rem;
    background-color: skyblue;

    .tab {
      display: flex;

      .icon {
        width: 0.8rem;
        padding: 0;
        border-radius: 0.2rem;
      }
    }
  }

  .calendar {
    flex: 1;

    background-color: red;
  }
`

export default calendarWrapper
