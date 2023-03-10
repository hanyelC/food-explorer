import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;

  & > button {
    border: 0;
    background-color: transparent;
    & > svg {
      ${({ isOpen }) => (isOpen ? 'transform: rotate(180deg);' : '')}
    }
  }
`

export const Option = styled.div`
  padding: 0.8rem 1.6rem;

  background-color: ${({ isSelected, theme }) =>
    isSelected ? `${theme.colors.BG.primary} !important` : 'transparent'};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.BG.tertiary};
  }
`

export const Options = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  top: 4rem;
  left: -1.6rem;
  right: 0;

  width: calc(100% + 3.2rem);

  padding: 0.8rem 0;

  border: 1px solid #fff;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.BG.fifth};
`

export const SelectedOption = styled.div`
  flex: 1;
`
