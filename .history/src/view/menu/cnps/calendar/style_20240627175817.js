import { styled } from 'styled-components'

const calendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 5;

  .selector {
    height: 2.1rem;
  }

  .calendar {
    flex: 1;
  }
`

export default calendarWrapper
