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

export const A = {
  actionResetFlavour,
  actionChangeFlavour,
  actionInitFlavour,
  actionChangeCheckbox,
  actionChangeRadio,
}
