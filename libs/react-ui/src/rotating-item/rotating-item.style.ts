import styled from 'styled-components'
import type { $TRotatingItem } from './rotating-item.type'

export const SRotatingItem = styled.div<$TRotatingItem>`
  transform: rotate(${({ $angle = 0 }) => `${$angle * 15}deg`});
  transform-origin: 50% 90rem;
  transition: 250ms;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;

  /* mobile only */
  @media (pointer: coarse) and (max-width: 48rem) {
    transform: rotate(${({ $angle = 0 }) => `${$angle * 11}deg`});
  }
`

export const SRotatingImageText = styled.p<$TRotatingItem>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $textColour }) => $textColour};
  font-family: 'Johnnie Walker Sans Headline';
  font-size: 3.5rem;
  line-height: 3rem;
`

export const SRotatingImageWrapper = styled.div<$TRotatingItem>`
  position: relative;
  inset: 0;
  width: 14.25rem; // 228px
  height: 17rem; // 272px
  position: relative;
  transform: scale(${({ $focused }) => ($focused ? 1 : 0.75)});

  &::before,
  &::after {
    width: 2rem;
    aspect-ratio: 1;
    position: absolute;
    top: 1rem;
    left: 1rem;
    transition: 250ms;
  }

  &::before {
    content: '';
    border: 0.125rem solid
      ${({ $checked }) => ($checked ? 'var(--black)' : 'var(--white)')};
    background: transparent;
  }

  &::after {
    font-family: 'jw-icon';
    content: '\\e900';
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ $checked }) => ($checked ? 'var(--white)' : 'transparent')};
    background: ${({ $checked }) =>
      $checked ? 'var(--black)' : 'transparent'};
  }

  @media screen and (min-width: 48rem) {
    width: 17.5rem;
    height: 20.9rem;
  }
`

export const SRotatingLabel = styled.label`
  cursor: pointer;
  position: relative;
  -webkit-user-select: none; /* Safari, Chrome, and Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */
`

export const SRotatingDescription = styled.p<$TRotatingItem>`
  position: relative;
  min-height: 5rem;
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Johnnie Walker Serif Book', serif;

  text-align: center;
  pointer-events: none;
  transition: 250ms;
  opacity: ${({ $focused }) => ($focused ? 1 : 0)};
  color: var(--text-color, var(--black));
`

export const SRotatingInput = styled.input`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`
