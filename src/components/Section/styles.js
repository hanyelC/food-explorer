import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.8rem 3rem;

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.FF.secondary};
    margin-bottom: 4rem;
  }
`
