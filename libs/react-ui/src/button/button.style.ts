import styled from 'styled-components'
import { $TButton } from './button.type'

export const SButton = styled.button<$TButton>`
  width: 100%;
  height: 3.75rem;
  font-size: 1.25rem;
  font-family: 'Johnnie Walker Sans Headline';
  padding-inline: 1rem;
  cursor: pointer;

  border: 2px solid
    ${({ $theme }) =>
      ['fill', 'outlined'].includes($theme) ? 'var(--black)' : 'transparent'};
  color: ${({ $theme }) =>
    ['text', 'outlined'].includes($theme) ? 'var(--black)' : 'var(--white)'};
  background-color: ${({ $theme }) =>
    'fill' === $theme ? 'var(--black)' : 'transparent'};

  @media screen and (min-width: 48rem) {
    width: 15rem;
  }
`
