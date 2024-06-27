import { styled } from 'styled-components'

const calendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 5;

  .selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.1rem;

    .tab {
      display: flex;
      align-items: center;

      .icon {
        width: 1.9rem;
        height: 1.9rem;

        padding: 0;
        margin: 0;

        font-weight: 300;
        text-align: center;
        line-height: 1.9rem;

        border-radius: 0.48rem;

        cursor: pointer;
      }
    }
  }

  .calendar {
    flex: 1;

    padding: 0.8rem;
    /* background-color: red; */
  }
`

export default calendarWrapper
