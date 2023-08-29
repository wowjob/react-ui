import type { TRotatingItem } from '../rotating-item'
import { TRotatingItemBase } from '../rotating-item/rotating-item.type'
import { C } from './rotating-carousel.constant'

const minimumItemNumber = 24

type TAction = {
  buttonList: string[]
  prefix: string
}

type TConfig = {
  taxonomyProfile: string
  taxonomyName: string
  saveData: string
}

type TRotatingCarousel = {
  postURL: string
  maxSelected: number
  list: TRotatingItem[]
  initialized: boolean
  selectedList: TRotatingItemBase[]
  lastFocused: string
  minimumItemNumber: number
  originalItemNumber: number
  maxSelectedText: string
  currentSelectedJoinText: string
  mainTitle: string
  action: TAction
  config: TConfig
  nextPage: string
  taxonomyValues: string
  // taxonomyValueList: TTaxonomyValue[]
}

export const initialValue: TRotatingCarousel = {
  ...(window as any).rotatingCarousel,
  originalItemNumber: (window as any).rotatingCarousel?.list.length || 0,
  lastFocused: 'rotating-item-selector-1',
  minimumItemNumber,
  selectedList: [],
}

const getHowManySelected = (list: TRotatingItem[]) => {
  const selectedMap: Record<number, boolean> = list
    .filter(({ checked }) => checked)
    .map(({ dataId }) => dataId || '')
    .reduce((a, c) => ({ ...a, [c]: true }), {})

  return Object.keys(selectedMap).map((dataId) =>
    list.find((item) => item.dataId === +dataId),
  ) as TRotatingItemBase[]
}

const getNextFocusInput = (currentInputId: string) => {
  const currentId = +currentInputId.split('-')[3]
  return `rotating-item-selector-${
    currentId < minimumItemNumber ? currentId + 1 : 1
  }`
}

const getPrevFocusInput = (currentInputId: string) => {
  const currentId = +currentInputId.split('-')[3]
  return `rotating-item-selector-${
    currentId > 1 ? currentId - 1 : minimumItemNumber
  }`
}

export const rotatingCarouselReducer = (state = initialValue, action: any) => {
  const newState = structuredClone(state)

  newState.selectedList = getHowManySelected(state.list)

  switch (action.type) {
    case C.ROTATING_CAROUSEL_REMOVE_INPUT:
      newState.selectedList = newState.selectedList.filter(
        ({ dataId }) => dataId !== +action.id,
      )
      newState.list = newState.list.map((item) =>
        item.dataId === +action.id ? { ...item, checked: false } : item,
      )
      return newState

    case C.ROTATING_CAROUSEL_FOCUS_NEXT_INPUT:
      newState.lastFocused = getNextFocusInput(state.lastFocused)
      return newState

    case C.ROTATING_CAROUSEL_FOCUS_PREV_INPUT:
      newState.lastFocused = getPrevFocusInput(state.lastFocused)
      return newState

    case C.ROTATING_CAROUSEL_FOCUS_INPUT:
      newState.lastFocused = action.id
      return newState

    case C.ROTATING_CAROUSEL_TOGGLE_INPUT:
      if (
        state.selectedList.length < state.maxSelected ||
        newState.selectedList.find((item) => item.dataId === action.id)
      ) {
        newState.list = state.list.map((item) => {
          return item.dataId === +action.id
            ? {
                ...item,
                checked: !item.checked,
              }
            : item
        })
        newState.selectedList = getHowManySelected(newState.list)
      }

      return newState

    case C.ROTATING_CAROUSEL_INIT:
      if (initialValue.list.length < minimumItemNumber) {
        newState.list = Array.from({ length: minimumItemNumber }, (_, k) => {
          return {
            ...initialValue.list[k % initialValue.list.length],
            id: k + 1,
          }
        })
        newState.initialized = true
      }

      return newState

    default:
      return state
  }
}
