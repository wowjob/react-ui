import { C } from './grid-list.constant'

const actionChangeFlavour = (dataId: number) => ({
  type: C.GRID_LIST_CHANGE_FLAVOUR,
  dataId,
})

const actionChangeCheckbox = (
  dataId: number | string,
  name: string | number,
  parsedKey?: number,
) => ({
  type: C.GRID_LIST_CHANGE_CHECKBOX,
  dataId,
  name,
  parsedKey,
})

const actionChangeRadio = (dataId: number | string, name: string | number) => ({
  type: C.GRID_LIST_CHANGE_RADIO,
  dataId,
  name,
})

const actionResetFlavour = () => ({
  type: C.GRID_LIST_RESET_FLAVOUR,
})

const actionInitFlavour = () => ({
  type: C.GRID_LIST_INIT,
})

const actionToggleProfile = () => ({
  type: C.GRID_LIST_TOGGLE_PROFILE,
})

const actionForceSelectOne = (label: string) => ({
  type: C.GRID_LIST_FORCE_SELECT_ONE,
  label,
})

const actionIncreasePageNumber = () => ({
  type: C.GRID_LIST_INCREASE_PAGE_NUMBER,
})

const actionIncreaseUpdate = () => ({
  type: C.GRID_LIST_INCREASE_UPDATE,
})

export const A = {
  actionIncreaseUpdate,
  actionIncreasePageNumber,
  actionForceSelectOne,
  actionResetFlavour,
  actionChangeFlavour,
  actionInitFlavour,
  actionChangeCheckbox,
  actionChangeRadio,
  actionToggleProfile,
}
