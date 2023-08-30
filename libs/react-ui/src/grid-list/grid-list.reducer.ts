import { C } from './grid-list.constant'
import { TGridListFlavour } from './grid-list.type'

type TFilterItem = {
  dataId: number | string
  label: string
  checked?: boolean
}

export type TFilterList = {
  list: TFilterItem[]
  type: 'checkbox' | 'radio'
  name?: string
} & TFilterItem

type TGridConfig = {
  pageid: number
  source: string
  profile: string
  type: string
  noFilterTextcolor: string
  noFilterBackgroundcolor: string
  noFilterBackground: string
  manyFilterTextcolor: string
  manyFilterBackgroundcolor: string
  manyFilterBackground: string
  flavour: {
    all: string
    cocktails: string
    variety: string
  }
}

type TGridList = {
  pageNumber?: number
  postURL: string
  profileOn: boolean
  flavourList: TGridListFlavour[]
  initialized: boolean
  showProfile: boolean
  config: TGridConfig
  flavour: {
    featuredId: number
    profileOn: {
      list: TGridListFlavour[]
      selected: TGridListFlavour[]
    }
    profileOff: {
      list: TGridListFlavour[]
      selected: TGridListFlavour[]
    }
  }
  filter: {
    profileToggleLabel: string
    profileToggleDescription: string
    profileOn: TFilterList[]
    profileOff: TFilterList[]
  }
  sort: TFilterList
  lastUpdate: number
}

export const initialValue: TGridList = {
  ...(window as any).gridList,
  lastFocused: 'flavour-selector-1',
  selectedFlavourList: [],
  lastUpdate: 0,
}

const getSelected = (list: TGridListFlavour[]) =>
  list.filter(({ checked }) => checked)

export const gridListReducer = (state = initialValue, action: any) => {
  const newState = structuredClone(state)
  const whichFilter = newState.profileOn ? 'profileOn' : 'profileOff'

  switch (action.type) {
    case C.GRID_LIST_INCREASE_UPDATE:
      newState.lastUpdate = newState.lastUpdate + 1
      return newState

    case C.GRID_LIST_INCREASE_PAGE_NUMBER:
      newState.pageNumber = (newState.pageNumber || 1) + 1
      return newState

    case C.GRID_LIST_TOGGLE_PROFILE:
      newState.profileOn = !newState.profileOn
      newState.lastUpdate = newState.lastUpdate + 1
      newState.pageNumber = 1
      return newState

    case C.GRID_LIST_CHANGE_RADIO:
      newState.sort.list = newState.sort.list.map((radio) => ({
        ...radio,
        checked: radio.dataId === action.dataId,
      }))
      newState.lastUpdate = newState.lastUpdate + 1
      newState.pageNumber = 1

      return newState

    case C.GRID_LIST_CHANGE_CHECKBOX:
      newState.filter.profileOff[action.parsedKey].list =
        newState.filter.profileOff[action.parsedKey].list.map((checkbox) =>
          checkbox.dataId === +action.dataId
            ? {
                ...checkbox,
                checked: !checkbox.checked,
              }
            : checkbox,
        )

      if (whichFilter === 'profileOn') {
        newState.profileOn = false
      }

      newState.pageNumber = 1

      newState.lastUpdate = newState.lastUpdate + 1

      return newState

    case C.GRID_LIST_CHANGE_FLAVOUR:
      newState.flavour.profileOff.list = newState.flavour.profileOff.list.map(
        (flavour) =>
          flavour.dataId === action.dataId
            ? { ...flavour, checked: !flavour.checked }
            : flavour,
      )
      newState.flavour.profileOff.selected = getSelected(
        newState.flavour.profileOff.list,
      )

      if (whichFilter === 'profileOn') {
        newState.profileOn = false
      }

      newState.lastUpdate = newState.lastUpdate + 1
      newState.pageNumber = 1

      return newState

    case C.GRID_LIST_RESET_FLAVOUR:
      newState.flavour.profileOff.selected = []
      newState.flavour.profileOff.list = newState.flavour.profileOff.list.map(
        (flavour) => ({
          ...flavour,
          checked: false,
        }),
      )
      newState.lastUpdate = newState.lastUpdate + 1
      newState.pageNumber = 1

      return newState

    case C.GRID_LIST_FORCE_SELECT_ONE:
      newState.flavour.profileOff.list = newState.flavour.profileOff.list.map(
        (flavour) => {
          return {
            ...flavour,
            checked:
              flavour.label?.toLowerCase() === action.label.toLowerCase()
                ? true
                : false,
          }
        },
      )
      newState.flavour.profileOff.selected = getSelected(
        newState.flavour.profileOff.list,
      )
      newState.lastUpdate = newState.lastUpdate + 1
      newState.profileOn = false
      newState.pageNumber = 1
      return newState

    case C.GRID_LIST_INIT:
      newState.flavour.profileOff.selected = getSelected(
        newState.flavour.profileOff.list,
      )
      newState.flavour.profileOn.selected = getSelected(
        newState.flavour.profileOn.list,
      )
      newState.initialized = true
      newState.pageNumber = 1
      newState.lastUpdate = newState.lastUpdate + 1

      return newState

    default:
      return state
  }
}
