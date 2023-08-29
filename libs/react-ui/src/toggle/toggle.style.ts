import { styled } from 'styled-components'
import type { $TToggle } from './toggle.type'

export const SInput = styled.input<$TToggle>`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`

export const SToggle = styled.label<$TToggle>`
  display: inline-block;
  border-radius: 2rem;
  width: 2rem;
  height: 1.25rem;
  background-color: var(--dusty-gray);
  position: relative;
  transition: 250ms;
  cursor: pointer;
  background-color: ${({ $checked }) =>
    $checked ? 'var(--orange)' : 'var(--dusty-gray)'};

  &::before {
    content: '';
    transition: 250ms;
    top: 0.25rem;
    left: ${({ $checked }) => ($checked ? '1rem' : '0.25rem')};
    position: absolute;
    width: 0.75rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--white);
    transition: 250ms;
  }

  &:focus-visible {
    outline: 0.5rem solid var(--blaze-orange);
  }
`
