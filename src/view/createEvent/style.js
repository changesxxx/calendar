import { styled } from 'styled-components'

const eventWrapper = styled.div`
  display: flex;
  flex: 7;

  border-radius: 1rem;
  background-color: var(--minor-bg-color);

  .test {
    position: absolute;
    width: 40px;
    height: 20px;
    top: 50%;
    left: 12px;
    background-color: skyblue;
    border-radius: 8px;
  }

  .input-container {
    padding: 0.625rem 0.125rem;
    position: relative;

    input {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 2.5rem;

      padding: 0.625rem 0.875rem;

      border-radius: 0.375rem;
      background-color: #f8fafb;
    }
  }

  .event-from-container {
    box-sizing: border-box;
    width: 50rem;
    margin: auto;

    padding: 1.25rem 1.875rem;

    border-radius: 0.5rem;

    background-color: #fff;
  }

  .event-title,
  .Description-title,
  .label-colour {
    margin-top: 1.375rem;
  }

  .label-colour {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .color-item {
      display: flex;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.625rem;
        height: 1.625rem;

        color: #fff;

        margin-right: 0.375rem;
        border-radius: 50%;

        cursor: pointer;
      }
    }

    .active {
      box-shadow: 0px 0px 10px 0px;
      box-shadow: #7991fc;
    }
  }

  .category {
    margin-top: 1.875rem;

    .category-container {
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      padding: 1rem 0.875rem;

      border-radius: 0.375rem;
      background-color: #f8fafb;

      input {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 1.5rem;

        padding: 0.625rem 0.875rem;

        border-radius: 0.375rem;
        background-color: #f8fafb;
      }

      .category-list {
        position: absolute;
        display: flex;
        justify-content: space-between;

        width: calc(100% - 1.875rem);
        top: calc(1rem + 1.5rem + 0.625rem + 0.75rem);
        left: 0;
        padding: 0.75rem;

        background-color: red;

        .category-item {
          display: block;
          padding: 0.375rem 0.625rem;
          margin-right: 0.375rem;

          border-radius: 0.25rem;
        }

        .add {
          font-size: Outfit-ExtraLight;
          padding: 0.5rem;
          border-radius: 0.375rem;

          color: #fff;
          background-color: #178fff;

          cursor: pointer;
        }
      }
    }
  }
`

export default eventWrapper
