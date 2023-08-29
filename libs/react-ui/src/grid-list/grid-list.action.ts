import { C } from './grid-list.constant'

const actionChangeFlavour = (dataId: number) => ({
  type: C.GRID_LIST_CHANGE_FLAVOUR,
  dataId,
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
}
