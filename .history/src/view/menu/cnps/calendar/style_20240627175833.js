import { styled } from 'styled-components'

const calendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 5;

  .selector {
    height: 2.1rem;
    background-color: #fff;
  }

  .calendar {
    flex: 1;

    background-color: red;
  }
`

export default calendarWrapper
