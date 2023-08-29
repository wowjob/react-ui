import styled from 'styled-components'
import type { $TRotatingCarousel } from './rotating-carouse.type'

export const SRotatingMainTitle = styled.h1`
  font-family: 'Johnnie Walker Sans Headline';
  font-size: 2.5rem;
  line-height: 2rem;
  letter-spacing: -0.04181rem;
  margin: 0;
  text-align: center;
  padding-inline: 1rem;
  position: relative;
  color: var(--text-color, var(--black));
`

export const SRotatingInfo = styled.div`
  font-family: 'Johnnie Walker Serif Book';
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  color: var(--text-color, var(--black));
`

export const SCurrent = styled.div`
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-family: 'Johnnie Walker Sans Headline';
  color: var(--text-color, var(--black));
`

export const SAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;
  padding-top: 9rem;
  color: var(--text-color, var(--black));
`

export const SSelected = styled.div`
  height: 3.25rem;
  display: flex;
  gap: 0.5rem;
  position: relative;
`

export const SContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const SRotatingCarousel = styled.div<$TRotatingCarousel>`
  position: relative;
  padding-top: 3rem;
  overflow: hidden;
  height: 57.5rem;
  transition: 250ms;
  position: relative;
  background-color: var(--orange);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${({ $backgroundImage }) => $backgroundImage}),
      var(--orange);
    background-position: center;
    background-size: cover;
    filter: blur(5px);
    isolation: isolate;
  }
`
type $TButton = {
  $direction: 'left' | 'right'
}

export const SButton = styled.button<$TButton>`
  align-self: center;
  cursor: pointer;
  font-size: 1.5rem;
  width: 3.2rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  transition: 250ms;
  background-color: var(--black);
  color: var(--white);
  font-family: 'jw-icon' !important;

  // fix bleeding css
  padding: 0;
  cursor: pointer;
  position: relative;

  &:focus-visible {
    outline: 0.5rem solid $blaze-orange;
  }

  &::before {
    font-family: 'jw-icon';
    content: '${({ $direction }) =>
      $direction === 'left' ? '\\e905' : '\\e906'}';
  }

  /* mobile only */
  @media (pointer: coarse) and (max-width: 48rem) {
    display: none;
  }
`

export const SRemoveButton = styled.button`
  align-self: center;
  cursor: pointer;
  border: 0.125rem solid var(--text-color, var(--black));
  color: var(--text-color, var(--black));
  font-family: 'Johnnie Walker Sans Headline';
  height: 2.25rem;
  padding-inline: 0.625rem;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  transition: 250ms;

  &&,
  &&:hover {
    background: transparent;
  }

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    color: var(--text-color, var(--black));
    font-family: 'jw-icon';
    content: '\\e904';
    font-size: 0.75rem;
  }
`

export const SItemGrid = styled.div`
  display: grid;
  height: 17rem; // 272px
  grid-template-columns: auto 17.5rem auto;
  gap: 0.75rem;
  min-height: 20.9rem;
  position: relative;

  @media screen and (max-width: 48rem) {
    grid-template-columns: auto 14.25rem auto;
    min-height: 17rem;
  }
`

export const SItemWrapper = styled.div`
  border: 10px double brown;
  position: relative;
`
