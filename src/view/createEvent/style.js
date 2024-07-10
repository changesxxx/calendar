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
      box-sizing: border-box;
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;
      /* height: 2.5rem; */

      margin-top: 1rem;
      /* padding: 0.5rem 0.875rem; */
      padding: 0.5rem 0;

      background-color: #f8fafb;

      #category {
        box-sizing: border-box;

        display: flex;
        flex-wrap: wrap;

        gap: 0.875rem 0.625rem;

        width: 100%;
        /* height: 2.5rem; */

        padding: 0.625rem 0.875rem;
        border-radius: 0.375rem;

        background-color: #f8fafb;

        .selected-item {
          position: relative;

          padding: 0.25rem 0.875rem;
          /* margin-right: 0.625rem; */

          border-radius: 0.375rem;

          .cross {
            position: absolute;
            top: -0.25rem;
            right: -0.25rem;
            color: #474747;

            cursor: pointer;
          }
        }
      }

      .category-label {
        position: absolute;
        right: 0.625rem;
        top: 50%;

        transform: translateY(-50%);
      }

      .category-list {
        position: absolute;
        display: flex;
        justify-content: space-between;

        width: calc(100% - 1.875rem);
        top: calc(100% + 0.625rem);
        left: 0;
        padding: 0.75rem;
        z-index: 1;

        background-color: #f8fafb;

        .item-container {
          display: flex;
          flex: 1;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.875rem 0.625rem;

          padding: 0 1rem;

          .category-item {
            padding: 0.375rem 0.625rem;

            border-radius: 0.25rem;

            cursor: pointer;
          }

          .category-item-input {
            display: flex;

            input {
              box-sizing: border-box;
              height: 1.5rem;

              padding: 0.625rem 0.875rem;

              border-radius: 0.375rem;
            }

            .input-title {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }

            .input-color {
              width: 1.95rem;

              padding: 0.25rem;
              border-radius: 0;

              border-top-right-radius: 0.375rem;
              border-bottom-right-radius: 0.375rem;
            }
          }
        }

        .btn-container {
          display: flex;
          align-items: center;

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
  }

  .event-date {
    display: flex;
    margin-top: 1.25rem;
    height: 7rem;

    .start-date,
    .end-date {
      flex: 1;
    }

    .start-date {
      margin-right: 0.625rem;
    }

    .error-text {
      margin-top: 0.75rem;
      font-size: 0.875rem;
      color: #ff6a00;
    }
  }

  .submit-container {
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: right;

    .submit {
      padding: 0.75rem 1rem;

      border-radius: 0.75rem;
      background-color: #875ffa;

      cursor: pointer;
    }
  }
`

export default eventWrapper
