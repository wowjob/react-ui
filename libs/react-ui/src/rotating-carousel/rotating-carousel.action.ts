import { C } from './rotating-carousel.constant'

const actionInit = () => ({
  type: C.ROTATING_CAROUSEL_INIT,
})

const actionToggleInput = (id: number) => ({
  type: C.ROTATING_CAROUSEL_TOGGLE_INPUT,
  id,
})

const actionFocusInput = (id: string) => ({
  type: C.ROTATING_CAROUSEL_FOCUS_INPUT,
  id,
})

const actionRemoveInput = (id: string) => ({
  type: C.ROTATING_CAROUSEL_REMOVE_INPUT,
  id,
})

const actionFocusNextInput = () => ({
  type: C.ROTATING_CAROUSEL_FOCUS_NEXT_INPUT,
})

const actionFocusPrevInput = () => ({
  type: C.ROTATING_CAROUSEL_FOCUS_PREV_INPUT,
})

export const A = {
  actionInit,
  actionToggleInput,
  actionFocusInput,
  actionFocusNextInput,
  actionFocusPrevInput,
  actionRemoveInput,
}
