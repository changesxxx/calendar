import { styled } from 'styled-components'

export const Line = styled.em`
  position: absolute;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 0.0625rem;

  border-bottom-style: solid;
  border-bottom-width: 0.0625rem;
  border-bottom-color: #ccc;
  top: ${(props) => props.$top}rem;

  z-index: 0;
`

const weekWrapper = styled.div`
  display: flex;
  height: 100%;

  .time {
    position: relative;
    top: -0.5rem;
    height: 7.5rem;
    width: 3.75rem;
  }

  .date-container {
    position: relative;
    display: flex;
    width: calc(100% - 7.5rem);

    .week-of-day {
      flex: 1;
      margin-right: 0.5rem;

      &:last-child {
        margin-right: 0;
      }

      .day-time {
        height: 7.5rem;
      }
    }
  }
`

export default weekWrapper
