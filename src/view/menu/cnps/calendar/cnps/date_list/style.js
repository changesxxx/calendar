import { styled } from 'styled-components'

const dateListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  padding: 0.6rem 0 0;
  margin-top: 1rem;

  .day-of-week {
    box-sizing: border-box;

    display: flex;
    height: 1.375rem;
    padding: 0.125rem;

    text-align: center;

    .day {
      font-family: Outfit-ExtraLight;
      margin: auto;
      font-size: 0.875rem;
    }
  }

  .day-list {
    display: flex;
    flex: 1;

    flex-direction: column;

    .day-of-week {
      flex: 1;
    }

    margin-top: 0.5rem;
    text-align: center;

    .day {
      width: 2.5rem;
      height: 2.5rem;

      line-height: 2.5rem;
      cursor: pointer;
    }
  }

  .active {
    color: #333;
    font-weight: 700;

    border-radius: 50%;
    background-color: var(--minor-color);
  }

  .week-active {
    border-radius: 2rem;
    background-color: #0e0e0e;
  }

  .obsolete {
    color: #434342;
  }
`
export default dateListWrapper
