import { styled } from 'styled-components'

const contentWrapper = styled.div`
  overflow-y: scroll;
  flex: 1;
  padding: 0.875rem 1.25rem 0.95rem;
  background-color: var(--secondary-color);

  &::-webkit-scrollbar {
    display: none;
  }
`

export default contentWrapper
