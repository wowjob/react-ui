import { styled } from 'styled-components'
import { $TGridListFlavour } from './grid-list.type'

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
`

export const STitle = styled.h3`
  font-family: 'Johnnie Walker Sans Headline';
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin: 0;
  padding-inline: 1rem;
`

export const SGridTitle = styled.h1`
  font-family: 'Johnnie Walker Sans Headline';
  font-size: 7.5rem;
  line-height: 6.25rem;
  color: var(--text-color, var(--black));
  margin: 0;
  text-shadow: 0 0 1px var(--black);
`

export const SGridList = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 37.5rem;
  background-color: var(--orange);
  margin: 0 auto;
  padding: 6.25rem 8rem;
  position: relative;
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
  display: block;
  overflow-y: auto;
`

export const SMainCheckbox = styled.div`
  display: flex;
  gap: 1rem;
`

export const SLabel = styled.label<$TGridListFlavour>`
  font-family: 'Johnnie Walker Sans Headline';
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
`
