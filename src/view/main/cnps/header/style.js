import { styled } from 'styled-components'

const headerWrapper = styled.div`
  background-color: #fff;

  padding: 0.875rem 1.25rem 0.95rem;

  /*   border-bottom-color: #fff;
  border-bottom-style: solid;
  border-bottom-width: 1px; */

  -moz-box-shadow: 0px 2px 0px #fff;
  -webkit-box-shadow: 0px 2px 0px #fff;
  box-shadow: 0px 2px 0px #fff;

  .options-card {
    padding: 0.75rem 2rem;

    background-color: var(--secondary-color);

    border-radius: 1rem;

    cursor: pointer;
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: Outfit-Medium;

    .date {
      font-size: 1.5rem;
    }
    .option {
      display: flex;

      padding: 0.25rem;

      .option-item {
        box-sizing: border-box;

        padding: 0.75rem 2rem;

        cursor: pointer;
      }

      .active {
        color: #333;
        font-weight: 900;
        background-color: #fff;

        border-radius: 1.15rem;
      }
    }

    .today {
      background-color: var(--secondary-color);
    }
  }

  .options-day {
    display: flex;

    padding: 0 3.75rem;
    margin-top: 1.25rem;

    .day-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;

      margin-right: 0.5rem;

      height: 3.75rem;

      text-align: center;

      .day {
        margin-top: 0.375rem;

        font-size: 2rem;
        font-family: Outfit-Bold;
      }

      &:last-child {
        margin-right: 0;
      }
    }
    .active {
      color: #fff;
      background-color: var(--minor-dark-color);
    }
  }
`

export default headerWrapper
