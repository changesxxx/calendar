import { styled } from 'styled-components'

const selectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.1rem;

  .current-date {
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  .tab {
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      justify-content: center;

      align-items: center;

      width: 1.9rem;
      height: 1.9rem;

      padding: 0;
      margin: 0;

      line-height: 1.9rem;

      border-radius: 0.48rem;

      cursor: pointer;
    }
  }
`

export default selectorWrapper
