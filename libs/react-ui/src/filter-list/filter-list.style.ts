import styled from 'styled-components'
import type { $TFilterItem } from './filter-list.type'

export const SList = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

export const STitle = styled.h3`
  font-family: 'Johnnie Walker Sans Headline';
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin: 0;
  padding-inline: 1rem;
`

export const SLabel = styled.label<$TFilterItem>`
  position: relative;
  display: flex;
  gap: 0.75rem;
  padding-inline: 1rem;
  cursor: pointer;

  &::before,
  &::after {
    transition: 250ms;
  }

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    display: inline-block;
    border: 1px solid var(--light-gray);
    border-radius: ${({ $type }) => ($type === 'radio' ? '50%' : 0)};
    background-color: ${({ $checked }) =>
      $checked ? 'var(--black)' : 'transparent'};
  }

  &::after {
    content: '\\e900';
    font-family: 'jw-icon';
    position: absolute;
    font-size: 0.625rem;
    left: 1.2rem;
    top: 0.2rem;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    transform: scale(${({ $checked }) => ($checked ? 1 : 0)});
    color: var(--white);
  }
`

export const SInput = styled.input`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`
