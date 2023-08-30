import { styled } from 'styled-components'
import { $TGridListFlavour } from './grid-list.type'

export const SChevron = styled.span<$TGridListFlavour>`
  width: 1rem;
  height: 1rem;
  display: inline-block;

  &::before {
    transition: 250ms;
    content: '\\e905';
    font-family: 'jw-icon';
    font-size: 1.125rem;
    left: 1.2rem;
    top: 0.2rem;
    display: inline-block;
    transform: rotate(90deg);
  }
`

export const SFilter = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  max-width: 17.5rem;
`

export const STitleWrapper = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const STitle = styled.h3<$TGridListFlavour>`
  font-family: 'Johnnie Walker Sans Headline';
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin: 0;
  padding: 1rem 0.625rem;
  cursor: pointer;
  position: relative;
  -webkit-user-select: none; /* Safari, Chrome, and Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */

  display: flex;
  gap: 0.75rem;
  justify-content: space-between;

  border-bottom: 0.125rem solid
    ${({ $underline }) => ($underline ? 'var(--black)' : 'transparent')};
`

export const SGridTitle = styled.h1`
  font-family: 'Johnnie Walker Sans Headline';
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 4rem;
  line-height: 3.5rem;
  color: var(--text-color, var(--black));
  margin: 0;
  text-shadow: 0 0 1px var(--black);

  /* tablet */
  @media screen and (min-width: 48rem) {
    font-size: 6.5rem;
    line-height: 5.375rem;
  }

  /* desktop */
  @media screen and (min-width: 80rem) {
    font-size: 7.5rem;
    line-height: 6.25rem;
  }
`

export const SGridList = styled.div`
  padding: 3rem 0;
  width: 100%;
  max-width: 90rem;
  height: 37.5rem;
  background-color: var(--orange);
  margin: 0 auto;
  position: relative;
  padding: 2.5rem 1.5rem;

  /* tablet */
  @media screen and (min-width: 48rem) {
    padding: 6.25rem 4.75rem;
  }

  /* desktop */
  @media screen and (min-width: 80rem) {
    padding: 6.25rem 8rem;
  }
`

export const SGridBackground = styled.div`
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  background-image: var(--bg);
`

export const SGridListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`

export const SMainCheckboxWrapper = styled.div`
  overflow-x: auto; /* Allows horizontal scrolling */
  overflow-y: hidden; /* Prevents vertical scrolling */
  height: 3.75rem;
  width: calc(100vw - 3rem);

  /* tablet */
  @media screen and (min-width: 48rem) {
    width: 43rem;
  }

  /* desktop */
  @media screen and (min-width: 80rem) {
    width: 73rem;
  }
`

export const SMainCheckbox = styled.div`
  display: flex;
  white-space: nowrap;

  width: 100%;
  height: 3.75rem;

  gap: 1rem;
`

export const SSpan = styled.span<$TGridListFlavour>`
  font-family: 'Johnnie Walker Sans Headline';
  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1.25rem;
`

export const SLabel = styled.label<$TGridListFlavour>`
  font-family: 'Johnnie Walker Sans Headline';
  text-transform: uppercase;
  flex: none;
  width: 9.75rem;
  height: 3.75rem;
  border: 0.125rem solid var(--border-color);
  background-color: ${({ $checked, $hightlight }) =>
    $hightlight
      ? 'var(--black)'
      : $checked
      ? 'var(--bg-color)'
      : 'transparent'};
  color: ${({ $checked, $hightlight }) =>
    $hightlight
      ? 'var(--white)'
      : $checked
      ? 'var(--text-color)'
      : 'var(--border-color)'};
  transition: 250ms;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SInput = styled.input`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &[id='toggle-filter']:checked {
    & + [for='toggle-filter'] ${SChevron} {
      &::before {
        transform: rotate(270deg);
      }
    }

    & ~ div {
      display: none;
    }
  }
`
